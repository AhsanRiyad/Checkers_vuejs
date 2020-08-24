<template>
  <v-data-table
  :headers="headers"
  :items="desserts"
  class="elevation-1"
  >
  <template v-slot:item.calories="{ item }">
    <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
    <!-- <v-btn :color="getColor(item.Calcium)" dark>{{ item.Calcium }}</v-btn> -->
  </template>
  <template v-slot:item.Calcium="{ item }" >
    <v-btn @click="CalciumClick()" :color="getColor(item.Calcium)" dark>{{ item.Calcium }}</v-btn>
  </template>
</v-data-table>
</template>


<script>

  import _ from 'lodash'
  export default {
    data () {
      return {
        headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'Calcium (%)', value: 'Calcium' },
        ],
        desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          Calcium: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        ],
      }
    },
    methods: {
      CalciumClick(){
        alert('clicked');
      },
      getColor (calories) {
        if (calories > 400) return 'red'
          else if (calories > 200) return 'orange'
            else return 'green'
          },
      },
      created(){

        var headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'} ;

          this.$axios.post( this.$store.getters.getModelAddress_laravel+'test' ,
          {

          } , headers
          ).then(function(response){
            console.log(response);
            console.log(response.data.new[0]);

            let new_info = response.data.new[0];
            console.log(_.toPairs(new_info));
            let toPairsNew =  _.toPairs(new_info);

            let withOutNullNew =  toPairsNew.filter((arr)=>{
              return arr[1] != null;
            })

            console.log(withOutNullNew);

            let old_info = response.data.old[0];
            console.log(_.toPairs(old_info));
            let toPairsOld =  _.toPairs(old_info);


            let matchingKey = _.difference(withOutNullNew , toPairsOld);

            console.log(matchingKey);

/*
           let newMatchingPair = 
            toPairsOld.filter((arrOld)=>{

              return (

                withOutNullNew.forEach((arrNew)=>{

                  return arrNew[0] == arrOld[0] ;

                })

                )

              })*/
            // console.log(newMatchingPair);
            
            let i,j;
            let obj = [];
            for(i=0; i<withOutNullNew.length; i++){

              // console.log(withOutNullNew[i][0]);
              // console.log(toPairsOld[i][0]);
              
              for(j=0;j<toPairsOld.length;j++){
              // console.log(toPairsOld[j][0]);

              if(withOutNullNew[i][0]==toPairsOld[j][0] && withOutNullNew[i][1]!=toPairsOld[j][1] )
              {
                console.log('matching');

                obj.push({
                name: withOutNullNew[i][0],
                new_value: withOutNullNew[i][1],
                old_value: toPairsOld[j][1],

               })
              }
            }



          }
          console.log('printing final object');
              console.log(obj);

              // console.log(withOutNullNew);
              // console.log(toPairsOld);

            }.bind(this))
          .catch(function(){


          }.bind(this));


        }


      }
    </script>
