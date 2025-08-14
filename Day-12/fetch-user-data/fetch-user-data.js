// Fetch user data from the JSONPlaceholder API endpoint

fetch("https://jsonplaceholder.typicode.com/users")

    // Convert the API response to JSON format
    .then(response => response.json())

    // Once the JSON is ready, process it
    .then(json => {

        // Variable to store HTML table rows
        let data = "";

        // Loop through each user object from the API
        json.forEach(user => {
            // Append a table row for each user with their details
            data += `
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4">
                    ${user.id} <!-- User ID -->
                </td>
                <td class="px-6 py-4">
                    ${user.name} <!-- User full name -->
                </td>
                <td class="px-6 py-4">
                    ${user.username} <!-- Username -->
                </td>
                <td class="px-6 py-4">
                    ${user.email} <!-- Email address -->
                </td>
                <td class="px-6 py-4">
                    ${user.address.street}, ${user.address.city} <!-- Street and city from address -->
                </td>
              </tr>
        `
        });

        // Insert the generated table rows into the element with ID "users"
        document.getElementById("users").innerHTML = data;
    });
