import { useUserStore } from "~/stores/user";

const store = useUserStore()


async function isAuthenticated(): Promise<boolean> { 
    const token = useCookie('idToken')

    if (!token.value) {
        return false;
    }

    try {
        const { data, error } = await useFetch('/api/google-auth', {
          method: 'POST',
          body: {
            token: token.value,
          },
        });

        if (!data || error.value) {
          return false;
        }

        
        if (data.value) {
            store.$patch({
                name: data.value.given_name ?? '',
                picture: data.value.picture ?? ''
            })
        }

        return true;
    
      } catch (err) {
        console.error('Error calling google auth api:', err);
        return false;
      }

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
