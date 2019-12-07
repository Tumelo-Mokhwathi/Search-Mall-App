<template>
  <div>
    <div class="input-group-append h-100">
      <input
        class="form-control h-100"
        type="text"
        name="search"
        v-model="searchText"
        placeholder="Search your favourate mall here (e.g. Mall of Africa)"
      />
    </div>
    <div v-if="!!SearchResult">
      <div v-if="searchText.length>0">
        <ul class="list-group">
          <li
            v-on:click="chosen(AddressDetail)"
            v-for="AddressDetail in SearchResult"
            :key="AddressDetail.id"
            class="list-group-item"
          >{{AddressDetail.Name}}</li>
        </ul>
      </div>
    </div>
    <div>
      <b-modal ref="displayInfo">
        <h5 class="text-center">Address Details</h5>
        <p>{{ name }}</p>
        <p>Address: {{ address }}</p>
        <p>Operating Hours: {{ operatingHours }}</p>
        <p>Phone: {{ contact }}</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Addresses"]),
    SearchResult() {
      return this.Addresses.filter(AddressDetail => {
        return AddressDetail.Address.toLowerCase().startsWith(
          this.searchText.toLowerCase()
        );
      });
    }
  },
  data() {
    return {
      address: null,
      contact: null,
      name: null,
      operatingHours: null,
      searchText: "",
    };
  },
  methods: {
    DisplayData(AddressDetail) {
      this.$refs["displayInfo"].show();
      this.address = AddressDetail.Address;
      this.contact = AddressDetail.Phone;
      this.name = AddressDetail.Name;
      this.operatingHours = AddressDetail.OperatingHours;
    },
    chosen(AddressDetail) {
      this.searchText = AddressDetail.Name;
      this.DisplayData(AddressDetail);
    }
  },
  name: "searchbyaddress"
};
</script>