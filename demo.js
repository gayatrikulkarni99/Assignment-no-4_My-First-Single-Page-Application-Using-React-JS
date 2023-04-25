const sendRequest = (method, url) => {

	const promise = new Promise((resolve, reject) => {

	const xhr = new XMLHttpRequest();

	xhr.open(method, url);


	xhr.responseType = 'json';


	xhr.onload = () => {

		if (xhr.status >= 400) {

			reject(xhr.response);

		}

		resolve(xhr.response);

	};


		xhr.send();

	});

	return promise;

};


const getData = async () => {

	try {

		const res = await sendRequest('GET', 'https://d8gd5.wiremockapi.cloud/');

		console.log(res);

	} catch (err) {

		console.log(err);

	}

};


getData();