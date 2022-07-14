<template>
  <div class="Product relative mx-14">
    <div class="bg-white rounded-2xl p-7 shadow-2xl flex gap-5 justify-evenly">
      <el-input
        placeholder="Nhập tên sản phẩm để tìm kiếm"
        v-model="input"
        class="w-1/3"
      ></el-input>
      <el-select v-model="value" placeholder="Phân loại">
        <el-option
          v-for="item in categories"
          :key="item.id"
          :label="item.title"
          :value="item.name"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="Phân loại">
        <el-option
          label="giá từ 10.000vnđ - 50.000vnđ"
          value="10-50"
        ></el-option>
        <el-option
          label="giá từ 51.000vnđ - 100.000vnđ"
          value="51-100"
        ></el-option>
      </el-select>
      <el-button
        class="bg-admin-greenBase text-white font-bold"
        icon="el-icon-plus"
        @click="dialogDrawerAddProduct = true"
        >Thêm sản phẩm</el-button
      >
    </div>
    <div class="bg-white rounded-2xl shadow-2xl p-7 mt-6">
      <el-table :data="Products" stripe height="40rem">
        <el-table-column
          label="STT"
          type="index"
          align="center"
        ></el-table-column>
        <el-table-column label="Sản phẩm" align="center" width="280px">
          <template slot-scope="scope">
            <div class="flex items-center gap-3">
              <img
                :src="getImgWebPng(scope.row.img)"
                :alt="scope.row.img"
                class="w-14"
              />
              <p class="break-normal text-left">{{ scope.row.title }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Mô tả"
          prop="descriptions"
          width="280px"
          align="center"
          class-name="data-product"
        ></el-table-column>
        <el-table-column label="Phân loại" prop="categorie" align="center">
          <template slot-scope="scope">
            <p>{{ checkCategorie(scope.row.categorie) }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="Giá gốc"
          prop="cost"
          align="center"
        ></el-table-column>
        <el-table-column
          label="Giá sale"
          prop="priceSale"
          align="center"
        ></el-table-column>
        <el-table-column label="Trạng thái" prop="sale" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.sale === 'sale'" type="success"
              >Đang giảm giá</el-tag
            >
            <el-tag v-else type="danger">Không giảm giá</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="Hành động"
          prop="sale"
          align="center"
          width="150px"
        >
          <template slot-scope="scope">
            <div class="flex justify-evenly items-center action">
              <el-button
                @click="hanlderShowDetail(scope.row.id)"
                class="border-0"
              >
                <i class="el-icon-view text-xl"></i>
              </el-button>
              <el-button
                @click="handlerClickEdit(scope.row.id)"
                class="border-0"
              >
                <i class="el-icon-edit-outline text-xl"></i>
              </el-button>
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

    <!-- Drawer -->
    <el-drawer
      title="Thêm sản phẩm mới"
      :before-close="handleCloseDrawerAddProduct"
      :visible.sync="dialogDrawerAddProduct"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
      size="40%"
    >
      <div class="px-6">
        <el-form :model="formAddProduct">
          <el-form-item label="Hình ảnh">
            <el-upload
              action="#"
              :auto-upload="false"
              list-type="picture-card"
              drag
              class="upload-demo mr-28"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                Drop file here or
                <em>click to upload</em>
              </div>

              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :class="checkimg(file)"
                  :src="file.url"
                  :alt="file.url"
                  :v-model="(img = file.name)"
                />
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="Tên sản phẩm">
            <el-input v-model="formAddProduct.title" class="w-3/4"></el-input>
          </el-form-item>
          <el-form-item label="Mô tả">
            <el-input
              v-model="formAddProduct.descriptions"
              class="w-3/4"
            ></el-input>
          </el-form-item>
          <el-form-item label="Giá gốc">
            <el-input v-model="formAddProduct.cost" class="w-3/4"></el-input>
          </el-form-item>
          <el-form-item label="Giá bán">
            <el-input
              v-model="formAddProduct.priceSale"
              class="w-3/4"
            ></el-input>
          </el-form-item>
          <el-form-item label="Phân loại">
            <el-select
              v-model="formAddProduct.categorie"
              placeholder="Phân loại"
            >
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item.title"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Bật Sale">
            <el-switch
              style="display: block"
              v-model="formAddProduct.sale"
              active-text="Bật sale"
              inactive-text="Tắt sale"
            ></el-switch>
          </el-form-item>
          <el-form-item label="Thể loại">
            <el-switch
              style="display: block"
              v-model="formAddProduct.type"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="Thức uống"
              inactive-text="Đồ ăn"
            ></el-switch>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getImgWebPng } from "@/utils";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
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
      dialogDrawerAddProduct: false,
      img: "",
      formAddProduct: {
        id: "",
        title: "",
        img: "",
        descriptions: "",
        priceSale: "",
        cost: "",
        categorie: "",
        sale: false,
        type: false,
      },
    };
  },
  computed: {
    ...mapGetters(["Products", "categories"]),
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
    checkimg(file) {
      if (file !== null) {
        return;
      } else {
        return "none";
      }
    },
    handleRemove(file) {
      console.log(file);
      file = null;
      console.log(file);
    },
    onSubmit() {
      if (this.formAddProduct.sale == false) {
        this.formAddProduct.sale = "notsale";
      }
      if (this.formAddProduct.sale == true) {
        this.formAddProduct.sale = "sale";
      }
      if (this.formAddProduct.type == false) {
        this.formAddProduct.type = "food";
      }
      if (this.formAddProduct.type == true) {
        this.formAddProduct.type = "drink";
      }
      this.formAddProduct.id = Math.floor(Math.random() * 100);
      this.formAddProduct.img = this.img.slice(0, 4);
      this.$store.commit("ADMIN_ADD_PRODUCT", this.formAddProduct);
      console.log(this.formAddProduct);
    },
    handleCloseDrawerAddProduct() {
      this.dialogDrawerAddProduct = false;
    },
  },
};
</script>

<style lang="scss">
.Product {
  .action {
    .el-button {
      padding: 0;
    }
  }
  .data-product {
    .cell {
      text-align: left;
    }
  }
  .el-upload--picture-card {
    border: none;
  }
  .el-upload--picture-card .none {
    display: none;
  }
}
</style>
