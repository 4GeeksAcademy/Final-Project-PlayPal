const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
		},
		actions: {
			

			submitSignUpForm: async (signUpData) => {
				console.log(signUpData)
				try {
					let response = await fetch("https://ideal-sniffle-64qjgqq5wqvhx459-3001.app.github.dev//api/signup", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(signUpData)
					});
					
					if (!response.ok) {
						throw new Error('Failed to create user');
					}
		
					let data = await response.json();
		
					return true;
				} catch (error) {
					console.error('Error creating user:', error);
					return false;
				}
			},
	
			

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
