 <!-- #################################### -->
  <!-- Important Notice  
       Due to some technical faults.The routes are not working 
       so if you want to navigate to the next page please write the 
       url manually in the browser address bar 
       or copy paste it from below:
       For Home-page="http://localhost:5173/"
       For About-page="http://localhost:5173/about"
       For Contact-page="http://localhost:5173/contact"
       For Product List="http://localhost:5173/ProductList"

       OR JUST WRITE about,contact,ProductList after the url
-->

 <!-- ##################################### -->
 
 
 <script setup>

  import { RouterView } from 'vue-router';

  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  

 
  

</script>
 
 
 <template>
    <main>
        <NavBar/>

         <RouterView/>

    </main>

    <Footer/>
 </template>