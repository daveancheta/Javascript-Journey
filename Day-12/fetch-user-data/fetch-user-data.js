fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())
    .then(json => {

        let data = "";
        json.forEach(user => {
            data += `
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" >
        <td class="px-6 py-4">
                    ${user.id}
                </td>
                <td class="px-6 py-4">
                    ${user.name}
                </td>
                <td class="px-6 py-4">
                    ${user.username}
                </td>
                <td class="px-6 py-4">
                    ${user.email}
                </td>
                <td class="px-6 py-4">
                    ${user.address.street}, ${user.address.city}
                </td>
                  </tr>
              
        `
        });
        document.getElementById("users").innerHTML = data;
    });
