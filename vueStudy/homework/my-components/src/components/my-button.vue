<template>
  <div id="_lbutton" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#_lbutton {
  width: 100px; /* Adjusted width */
  height: 50px; /* Adjusted height */
  background-color: #007bff; /* Button color */
  color: white; /* Text color */
  border: none; /* No border */
  margin: 50px auto 0;
  border-radius: 5px; /* Rounded corners */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  cursor: pointer; /* Cursor changes to pointer on hover */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
}

#_lbutton:hover {
  background-color: #0056b3; /* Darker shade when hovered */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Larger shadow when hovered */
}
</style>