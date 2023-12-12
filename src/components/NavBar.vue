<template>

<div class="bg-slate-200 text-black py-3.5 px-6 shadow md:flex justify-between items-center">
   <div class="flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1">
        <i class="bi">
         <img src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" class="h-20 w-20">
        </i>
      </span>
      <h1 class="text-3xl text-black font-semibold font-serif">Let's Shop</h1>
   </div>

   <ul class="md:flex md:items-center ">
      <li class="md:mx-4 md:my0 my-6" v-for="link in Links">
         <a :href='link.Links' class="text-xl hover:text-green-500 cursor-pointer">{{link.name}}</a>
      </li>
      
   </ul>
</div>



</template>


<script>
 
 import { reactive } from 'vue';
 import { useRoute, useRouter} from 'vue-router';



   export default{
     
      setup(){
         // const route = useRoute();
         const router = useRouter();
         const Links = reactive ([
            {name: 'Home', href: {name: 'home'} },
            {name: 'About us', href: {name: 'about'} },
            {name: 'Product', href: {name:'Product'} },
            {name: 'Contact us', href: {name:'Contact'} },
            
         ]);

         // const goToContact = () => {
         //    const contactLink = Links.find((link) => link.name === 'Contact us');
         //    if(contactLink){
         //       router.push(contactLink.href);
         //    }
         // };

         return{ Links };
      }
   }


</script>