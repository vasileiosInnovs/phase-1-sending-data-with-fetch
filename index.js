// Add your code here

//write a function submitData
//takes two strings as arguments
//one representing user's name and the other representing user's email
//submitData returns the fetch()
//write valid POST request using fetch()
//should include: destination URL, headers and a body
//should have name and email passed as arguments to submitData
//these should be assigned to name and email keys within an object
//this object should be stringified
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })

    })

    //use then() to access response object
    //use its inbuilt json() method to parse content
    //use a second then() to access this newly converted object
    //from this object find the new id and append its value to the DOM
    //test code in console calling submitData() should cause an id number to appear on the page

    .then((res) => res.json())
    .then((user) => {
            let firstElement = document.createElement('span');
            let secondElement = document.createElement('span');

            firstElement.textContent = `ID: ${user.id}, Name: ${user.name}`;
            secondElement.textContent = ` Email: ${user.email}`;

            document.body.append(firstElement); 
            document.body.append(secondElement);  
    })
    .catch(error => {
        console.error('ERROR!', error);
        let errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.append(errorElement);
    })

    }
        
    
    
/* submitData('James', 'Jemo@james.com') */
