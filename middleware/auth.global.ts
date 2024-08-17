import { useUserStore } from "@/stores/user";

const store = useUserStore()


async function isAuthenticated(): Promise<boolean> { 
    const token = useCookie('idToken')

    if (!token) {
        return false;
    }

    try {
        const { data, error } = await useFetch('/api/google-auth', {
          method: 'POST',
          body: {
            token: token,
          },
        });

        if (!data || error.value) {
          return false;
        }

        if (data.value) {
          await handleUser(data)
        }

        return true;
    
      } catch (err) {
        console.error('Error calling google auth api:', err);
        return false;
      }

}

async function handleUser(authData: any) {
  const { data, error } = await useFetch('/api/fetch-user', {
        method: 'GET',
        query: {
          email: authData.value.email,
        },
      });

      console.log('data --> ' + JSON.stringify(data))
      // let userId = data.value.id;

      // if (!userId) {
      //   userResponse = await addUser(data.value.given_name ?? '', data.value.email ?? '');
      //   userId = userResponse.data.id;
      // }

      store.$patch({
          // id: userId ?? '',
          name: authData.value.given_name ?? '',
          email: authData.value.email ?? '',
          picture: authData.value.picture ?? ''
      })

      console.log('id --> ' + store.id)
}

export default defineNuxtRouteMiddleware(async (to, from) => {

    const authenticated = await isAuthenticated();

    if (to.path === '/login') {
        if (authenticated) {
            return navigateTo('/');
        }
        return
    }

    if (!authenticated) {
        return navigateTo('/login');
    }

})
