const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			rooms: []

		},


		actions: {

			submitLogInForm: async (logInData) => {
				try {
					let response = await fetch("https://ideal-sniffle-64qjgqq5wqvhx459-3001.app.github.dev/api/login", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(logInData)
					});
					if (!response.ok) {
						throw new Error('Failed to log in');
					}

					let data = await response.json
					localStorage.setItem("jwt-token", data.token);

					return true;
				}
				catch (error) {
					console.error('Error logging user in:', error);
					return false;
				}


			},

			submitSignUpForm: async (signUpData) => {
				try {
					let response = await fetch("https://ideal-sniffle-64qjgqq5wqvhx459-3001.app.github.dev/api/signup", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(signUpData)
					});

					if (!response.ok) {
						throw new Error('Failed to create user');
					}

					return true;
				} catch (error) {
					console.error('Error creating user:', error);
					return false;
				}
			},

			fetchRooms: async () => {
				const store = getStore();
			
				try {
					let response = await fetch("https://ideal-sniffle-64qjgqq5wqvhx459-3001.app.github.dev/api/home"); /* aqui debemos agregar la el header con la autentificacion */
					if (!response.ok) throw new Error("Couldn't fetch current rooms");
					let roomsData = await response.json();
					setStore({...store, rooms: roomsData});
					console.log(store.rooms)
				} catch (error) {	
					console.error(error);
				}
			},

			getMessage: async () => {
				try {

					const resp = await fetch("https://ideal-sniffle-64qjgqq5wqvhx459-3001.app.github.dev/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })

					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
