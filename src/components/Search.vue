<template>
  <div class="row">
    <div class="offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-xs-12" style="height:35px;">
      <div class="w-100 d-inline-block h-100">
        <search-by-address/>
      </div>
    </div>
  </div>
</template>
<script>
import SearchByAddress from "@/components/Search/SearchByAddress.vue";
export default {
  components: {
    SearchByAddress
  },
  name: "search"
};
</script>