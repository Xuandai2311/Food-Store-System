<template>
  <div class="Product shadow-4xl relative mx-14">
    <div class="bg-white rounded-2xl p-7 flex gap-5 justify-evenly">
      <el-input
        placeholder="Nhập tên sản phẩm để tìm kiếm"
        v-model="input"
        class="w-1/3"
      ></el-input>
      <el-select v-model="value" placeholder="Phân loại">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="Giá">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button
        class="bg-admin-greenBase text-white font-bold"
        icon="el-icon-plus"
        >Thêm sản phẩm</el-button
      >
    </div>
    <div class="bg-white rounded-2xl p-7 mt-6">
      <el-table :data="Products" stripe height="40rem" center>
        <el-table-column label="STT" type="index" center></el-table-column>
        <el-table-column label="Hình ảnh" center>
          <template slot-scope="scope">
            <div class="flex items-center gap-3">
              <img
                :src="getImgWebPng(scope.row.img)"
                :alt="scope.row.img"
                class="w-14"
              />
              <p class="break-normal">{{ scope.row.title }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Mô tả"
          prop="descriptions"
          width="180px"
          center
        ></el-table-column>
        <el-table-column label="Phân loại" prop="categorie" center>
          <template slot-scope="scope">
            <p>{{ checkCategorie(scope.row.categorie) }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Giá sale" prop="cost" center></el-table-column>
        <el-table-column
          label="Giá gốc"
          prop="priceSale"
          center
        ></el-table-column>
        <el-table-column label="Trạng thái" prop="sale" center>
          <template slot-scope="scope">
            <el-tag v-if="scope.row.sale === 'sale'" type="success"
              >Đang giảm giá</el-tag
            >
            <el-tag v-else type="danger">Không giảm giá</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Hành động" prop="sale" center>
          <template slot-scope="scope">
            <div class="flex justify-evenly items-center">
              <el-button
                @click="hanlderShowDetail(scope.row.id)"
                class="border-0"
              >
                <i class="el-icon-view text-xl"></i>
              </el-button>
              <el-button
                @click="handlerClickEdit(scope.row.id)"
                class="border-0"
                ><i class="el-icon-edit-outline text-xl"></i
              ></el-button>
              <el-button
                @click="hanlderClickDelete(scope.row.id)"
                class="border-0"
              >
                <i class="el-icon-delete text-xl"></i>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getImgWebPng } from "@/utils";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
      input: "",
    };
  },
  computed: {
    ...mapGetters(["Products"]),
  },
  methods: {
    getImgWebPng,
    checkCategorie(row) {
      if (row === "banhmi") {
        return "Bánh Mì";
      }
      if (row === "com") {
        return "Cơm";
      }
      if (row === "pizza") {
        return "Pizza";
      }
      if (row === "fastfood") {
        return "Fast Food";
      }
      if (row === "coffee") {
        return "Cà Phê";
      }
      if (row === "milktea") {
        return "Trà Sữa";
      }
      if (row === "gaz") {
        return "Nước giải khát";
      }
      if (row === "ancohol") {
        return "Rượu";
      }
    },
  },
};
</script>

<style></style>
