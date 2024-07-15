// const url = 'https://instagram-looter2.p.rapidapi.com/reels?id=18527&count=12';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '69c7ed24d8msh8c3d08214e2be59p1a39fdjsn202a54dbe5e4',
// 		'x-rapidapi-host': 'instagram-looter2.p.rapidapi.com'
// 	}
// };

// async function getReelsVideoUrl() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json();
// 		return result.items[0].media.video_versions[0].url;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// async function displayVideo() {
// 	try {
// 		const videoUrl = await getReelsVideoUrl();
// 		const videoContainer = document.getElementById('video-container');
// 		videoContainer.innerHTML = `<video src="${videoUrl}" id="get-video" controls autoplay style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;"></video>`;
//         console.log(videoUrl);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// // Call the function to display the video
// displayVideo();




// const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/search_users?search_query=jainamdosi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '69c7ed24d8msh8c3d08214e2be59p1a39fdjsn202a54dbe5e4',
// 		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
// 	}
// };
// async function search_query(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result.data.items[].username);
// } catch (error) {
// 	console.error(error);
// }
// }
// search_query();