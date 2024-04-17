// import { reactive } from 'vue'

// export const store = reactive({
//     posts: fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`, {
//         method: "GET",
//         headers: { "content-type": "application/json" },
//     })
//         .then((res) => res.json())
//         .then((response) => {
//             posts.value = response;
//         })
//         .catch((error) => {
//             console.log("Looks like there was a problem: \n", error);
//         }),
// })