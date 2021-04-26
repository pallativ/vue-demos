# Vue Demo

This repo contains the examples for Vue JS.

# Setup

Adding Vue JS CDN or download and add script tag.

# Binding attributes.

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
-   **v-on:input**
    Below code contains two version of setName, one without **$event** argument, other is explicitly passing **$event**.
    ```
        <input v-on:input="setName" type="text">
        <input v-on:input="setNameV2($event, 'Pallati')" type="text">
    ```

# Event Modifiers

-   The following code modifies the event
    ```
        submitForm(event) {
            event.preventDefault();
            console.log("Form Submitted");
        }
        or
        v-on:submit.prevent - Prevent submitting the form.
        v-on:click.right - only react to mouse right click
        v-on:keyup:enter - This is fire the method only on ENTER is pressed
    ```
