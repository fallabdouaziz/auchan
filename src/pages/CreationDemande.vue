<template>
  <q-page padding>
    <div class="row flex justify-center  q-pa-md">
      <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
        <div class="flex justify-center">
          <h5 class="text-red">Création de la demande</h5>
        </div>
        <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
          <div class="flex justify-center">
            <q-banner class="bg-red col-xs-12" dark inline-actions rounded v-if="getBool">
              <p align="center">{{getMessage}}</p>
            </q-banner>
            <q-banner class="bg-red col-xs-12" dark inline-actions rounded v-if="message">
              <p align="center">{{message}}</p>
            </q-banner>
          </div>
        </div>
        <div class="row flex justify-center q-mt-md">
          <div class="col-xs-12">
            <q-input label="Entrer la matiere" v-model="nom"/>
          </div>
        </div>
        <div class="row flex justify-center q-mt-md">
          <div class="col-xs-12">
            <q-select label="Selectionnez la classe" :options="tabclasse" v-model="classe"/>
          </div>
        </div>
        <div class="row flex justify-center q-mt-md">
          <div class="col-xs-12">
            <q-input label="description" v-model="description" type="textarea"/>
          </div>
        </div>
        <div class="row flex justify-center q-mt-md">
          <div class="col-xs-12">
            <p align="center" class="q-mt-md">Disponibilité</p>
            <q-date v-model="datedemande" color="red"/>
          </div>
        </div>
        <div class="row flex justify-center q-mt-md">
          <div class="col-xs-12">
            <q-time color="red" v-model="heure"/>
          </div>
        </div>
        <div class="row q-mt-md">
          <div class=" col-xs-12 col-sm-6 col-md-6">
            <q-btn label="Envoyer" color="primary" style="width: 100%;" @click="ajouterDemande"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      classe: null,
      tabclasse: ['CI', 'CP', 'CE', 'CM1', 'CM2', '6EME', '5EME', '4EME', '3EME'],
      datedemande: new Date(),
      heure: null,
      nom: null,
      description: null,
      message: ''
    }
  },
  computed: {
    getBool () {
      return this.$store.getters.getBool
    },
    getMessage () {
      return this.$store.getters.getMessage
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    ajouterDemande () {
      console.log(this.nom)
      if (this.nom === null || this.classe === null || this.description === null || this.datedemande === null || this.heure === null) {
        this.message = 'veuillez remplir tous les champs'
      } else {
        this.message = ''
        this.$store.dispatch('creerDemande', { nom: this.nom, classe: this.classe, description: this.description, date: this.datedemande, horaire: this.heure, id: this.user.id })
      }
    }
  }
}
</script>
