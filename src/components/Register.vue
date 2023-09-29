
<template>
    <div id="register">
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                    class ="mx-auto"
                    width ="500"
                    >
                <v-toolbar
                color="teal"
                theme="dark"
                >
            <v-toolbar-title class="text-h6">
                User Registration
            </v-toolbar-title>
            </v-toolbar>
            <v-container>
                <v-text-field
                V-model="first"
                color="Teal"
                label="First Name"
                variant="underlined"
                ></v-text-field>

                <v-text-field
                V-model="second"
                color="Teal"
                label="Last Name"
                variant="underlined"
                ></v-text-field>

                <v-text-field
                V-model="email"
                color="Teal"
                label="Email Address"
                variant="underlined"
                ></v-text-field>

                <v-text-field
                V-model="phonenumber"
                color="Teal"
                label="Phone Number"
                variant="underlined"
                type="number"
                ></v-text-field>

                <v-text-field
                V-model="password"
                color="Teal"
                label="Password"
                placeholder="Enter your Password"
                variant="underlined"
                type="password"
                ></v-text-field>

                <v-checkbox
                V-model= "terms"
                color="secondary"
                label="I agree to site terms and conditions"
                ></v-checkbox>

            </v-container>

            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success">
                    
                    Completing Sign Up
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
        first: null,
        last: null,
        email: null,
        password: null,
        phone: null,
        terms: false,

    }),
}</script>