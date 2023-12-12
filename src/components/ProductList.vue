<template>

    <div class="bg-violet-200">

      <h1 class="text-center font-mono text-2xl font-bold bg-yellow-200">Products</h1>
      <div class="flex">

        <div class="text-4xl font-mono px-4 " v-for="product in products"
        :key="product.name">
        {{product.name}}
         
          <img class="h-80 w-80" :src="product.image"/>
          <p class="bg-red-100">{{product.cost}} </p>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
           dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2" @click="calculateFinalPrice(product)">Buy Now</button>
          <p v-if="product.finalPrice" class="text-blue-900 text-sans">Final Price with GST: {{ product.finalPrice}}</p>
    </div >


      </div>
       
    
    </div>

    
    </template>



   <script>


   export default{
             name:'ProductList',
             data()  {
                return {
                    products: [
                        {
                            name: 'T-shirt',
                            cost: '$2.99',
                            image: 'https://static.zara.net/photos///2023/I/0/3/p/1887/681/430/2/w/824/1887681430_6_1_1.jpg?ts=1689763474531',
                        },
                        {
                            name:'Shirt',
                            cost:'$5.99',
                            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKeOp6da91A4P1slD95RVFcCapAxX3LpVtA&usqp=CAU'
                        },{
                              name:'Jeans',
                              cost:'$2.09',
                              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw9f1IfeD6tSBOqtMrN_RFWjeOXpcbtCApA&usqp=CAU"
                        },
                          {
                            name:'Jacket',
                            cost:'$3.09',
                            image:"https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"
                        },

                        {
                          name:'Hoodie',
                          cost:'4.99',
                          image:'https://www.samsoe.com/dw/image/v2/BBPQ_PRD/on/demandware.static/-/Sites-samsoe-master-catalogue/default/dwb27c465a/PIM/Samsoe/PackGreyBG/M00018104-161103TCX-2.jpg?sw=690&sh=1035&sm=fit'
                        }
                    ]
                
             };
   },

   methods: {
        calculateFinalPrice(product) {
          const GST = 1.18;
          const costWithoutGST = parseFloat(product.cost.replace('$',''));
          const gstAmount = costWithoutGST * GST;
          const finalPrice = costWithoutGST + gstAmount;

          product.finalPrice = '$' + finalPrice.toFixed(2);
        
        }
      }
   
};

</script>