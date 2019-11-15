# Front-End

product vision: https://www.notion.so/Product-Vision-49a32b32e1ed4ebdb49979aba19c8173

Frameworks - Libraries

3rd party frameworks/libraries
-React (Functional Components and Hooks)
-Context API
-Axios
-Formik
-Styled Components

Do APIs require you to contact its maintainer to gain access?
-Not for any of the APIs required for this project

Are you required to pay to use the API?
-No


Component Tree/ Outline:

Landing Page:
	- Nav Component
		- Homepage
		- Login/sign out
		- Signup
		- Account page
	- Header Comp {Styled component with text}
	- Quiz Launcher Comp {Link Component to quiz page}
	- Celebrity Component {Hold all data for celeb img, name with name displaying on top}

Quiz Page:
	- Quiz Card {Large container object styled component}
		-Celebrity Component {Defined above}
		-Timer Component {Timer, count down}
		-Score Component {Score:, score value}
		-Choices Comp {Div}
			-Dead {Button styled,}
			-Alive {Button styled,}
			- Word OR {Plain text}

Final Page:
-Nav
	- Homepage
	- Login/sign out
	- Signup
	- Account page
- Header
	- You scored {Text}
	- Score value {<---}
- Sign up
	- Sign up header {Text}
	- Sign up form component {Styled}
		- Form {styled}
			actual form: {email, and password with headers and placeholders for each}
		- Submit {submit button}
- Try Again
	- Footer/Link to home
	

