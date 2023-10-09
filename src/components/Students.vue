
<template>
    <div id="students">
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                    class ="mx-auto"
                    
                    >
                <v-toolbar
                color="teal"
                theme="dark"
                >
                <v-toolbar-title class="text-h6">
                Students
            </v-toolbar-title>
                
            </v-toolbar>
            <v-container>
                <v-table>
    <thead>
      <tr>
        <th class="text-left">First Name </th>
        <th class="text-left">Last Name </th>
        <th class="text-left">Gender </th>
        <th class="text-left">Email Address </th>
        <th class="text-left">Phone Number </th>
        
      </tr>
    </thead>
    <tbody>
        <!-- for each of our row created, iterate through and will look for the code in 58 downwards, for the number of rows -->
      <tr v-for="student in students" :key="students"> 
        <td>{{ student.firstname }}</td> 
        <td>{{ student.lastname }}</td>
        <td>{{ student.gender }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
      </tr>
    </tbody>
  </v-table>

            </v-container>

            <v-divider></v-divider>

            </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default{
    data () {
    return{
        students:[
            {firstname: 'Olivia',
            lastname: 'Ayora',
            gender: 'Female',
            email: 'olivia@outlook.com',
            phone: '254739683446',
            },

            {firstname: 'Nathaniel',
            lastname: 'Shalom',
            gender: 'Male',
            email: 'nathan@outlook.com',
            phone: '254739456123',
            },

            {firstname: 'Daniel',
            lastname: 'Joel',
            gender: 'Male',
            email: 'daniel@outlook.com',
            phone: '254722123456',
            }
            ]
        }
    }
    }


</script>