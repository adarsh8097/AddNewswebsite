import AdminLayout from "@/components/AdminLayout";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps,router }) {
    const isadminpannal = router.pathname.startsWith('/Admin');
    const isLoginadminpannel = router.pathname.startsWith('/Login');

  return(
   <>
    { isLoginadminpannel ? (
       <Component {...pageProps}/>
    ):(
      isadminpannal ? (
        <AdminLayout>
          <Component {...pageProps}/>
        </AdminLayout>
        ):
      (
      <Layout>
     <Component {...pageProps} />
    </Layout>
     ))}

    

   </>
  );
   
}
