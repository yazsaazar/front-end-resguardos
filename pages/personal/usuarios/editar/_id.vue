<template>


  <AdminTemplate :page="page" :modulo="modulo">
    <div slot="body">
      <div class="row justify-content-center">
        <div class="col-sm-11 col-12">
          <div class="card">
            <div class="card-header">
              <h3>Actualizar</h3>
            </div>
            <div class="card-body">
              <CrudUpdate :model="model" :apiUrl="apiUrl">
                <div slot="body" class="row">
                  <div class="form-group col-3">
                    <label for="">Usuario</label>
                    <input
                      type="text"
                      name=""
                      v-model="model.usuario"
                      class="form-control"
                      id=""
                    />
                  </div>

                  <div class="form-group col-3">
                    <label for="">Contraseña</label>
                    <input
                      type="password"
                      name=""
                      v-model="model.contrasena"
                      class="form-control"
                      id=""
                    />
                  </div>

                  <div class="form-group col-3">
                    <label for="">Resort</label>
                    <select name="" id="" class="form-control" v-model="model.id_resort">
                      <option v-for="m in resorts" :value="m.id">{{m.nombre}}</option>
                    </select>
                  </div>

                  <div class="form-group col-3">
                    <label for="">Nivel</label>
                    <select name="" id="" class="form-control" v-model="model.id_nivel">
                      <option v-for="m in niveles" :value="m.id">{{m.nombre}}</option>
                    </select>
                  </div>




                </div>
              </CrudUpdate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.modulo,
    };
  },
  data() {
    return {
      model: {
        usuario:"",
        id_resort:"",
        id_nivel:"",
        contrasena:""
      },
      apiUrl:'usuarios',
      page:'Personal',
      modulo:'Usuarios',
      resorts:[],
      niveles:[],
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([
          this.GET_DATA(this.apiUrl+'/'+this.$route.params.id),this.GET_DATA("resorts"), this.GET_DATA("niveles")
        ]).then((v) => {
          this.model = v[0];
          this.resorts = v[1];
          this.niveles = v[2];
          if(this.resorts.length){
              this.model.id_resort = this.resorts[0].id
          }

          if(this.niveles.length){
              this.model.id_nivel = this.niveles[0].id
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  },
};
</script>
