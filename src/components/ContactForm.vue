<template>
    <div class="bg-gray-100 py-8">
      <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name:</label>
            <input type="text" id="name" v-model="formData.name" required
                   class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
            <input type="email" id="email" v-model="formData.email" required
                   class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-semibold mb-2">Message:</label>
            <textarea id="message" v-model="formData.message" rows="4" required
                      class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400" placeholder="Data will be saved in console !!"></textarea>
          </div>
          <div>
            <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        
         console.log('Form Data:', this.formData);
  
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    }
  };
  </script>
