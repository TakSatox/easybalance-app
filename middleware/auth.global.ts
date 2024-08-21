import { useUserStore } from "@/stores/user";

const user = useUserStore()

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
  const { data, error } = await useFetch('/api/users', {
        method: 'GET',
        query: {
          email: authData.value.email,
        },
      });

    let userId = data.value.id

    if(error.value) {
      const { body } = await $fetch('/api/users', {
        method: 'POST',
        body: {
          email: authData.value.email,
          name: authData.value.given_name,
        },
      });

      userId = body.value.id;
    }

    user.$patch({
      id: userId ?? '',
      name: authData.value.name ?? '',
      email: authData.value.email ?? '',
      picture: authData.value.picture ?? ''
    })
    
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
