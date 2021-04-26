# Vue Demo

This repo contains the examples for Vue JS.

# Setup

Adding Vue JS CDN or download and add script tag.

# Important binding attributes.

-   **v-bind**
    ```
        <p>Learn more <a v-bind:href="vueLink">about me</a></p>
    ```
-   **v-html**
    ```
        <p v-html="htmlContent"></p>
    ```
-   **v-for**
    ```
        <tr v-for="item in list>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
        </tr>
    ```

# Event binding

-   **v-on:click**
    ```
        <button v-on:click="add(5)" class="btn btn-primary">Add</button>
    ```
