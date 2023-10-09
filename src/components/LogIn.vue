<script>

</script>

<template>
    <div id="login">
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                    class ="mx-auto"
                    width ="600"
                    >
                <v-toolbar
                color="teal"
                theme="dark"
                >
            <v-toolbar-title class="text-h6">
                Log In
            </v-toolbar-title>
            </v-toolbar>
            <v-container>
                  <v-text-field
                V-model="email"
                color="Teal"
                label="Email Address"
                variant="underlined"
                ></v-text-field>

                <v-text-field
                V-model="password"
                color="Teal"
                label="Password"
                placeholder="Enter your Password"
                variant="underlined"
                type="password"
                ></v-text-field>

            </v-container>

            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success">
                    Log In
                <v-icon icon="mdi-login" end></v-icon>
                </v-btn>
                <v-btn color="success" to="/Register">
                    Don't have an account yet? Register with us
                <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
            </v-card-actions>
            </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>

</template>
<script>
export default{
    data: () => ({
        email: null,
        password: null,
        terms: false,

    }),
}</script>