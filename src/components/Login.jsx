import './styleslogin.css';

function Login() {
    return (
        <>
            <div class="container">
                <div class="form_area">
                    <p class="title">LOGIN</p>
                    <form action="">
                        <div class="form_group">
                            <label class="sub_title" for="name">Name</label>
                            <input placeholder="Enter your full name" class="form_style" type="text"/>
                        </div>
                        
                        <div class="form_group">
                            <label class="sub_title" for="password">Password</label>
                            <input placeholder="Enter your password" id="password" class="form_style" type="password"/>
                        </div>
                        <div>
                            <button class="btn">LOGIN</button>
                            <p>Don't have an Account? <a class="link" href="">signup Here!</a></p><a class="link" href="">
                            </a></div><a class="link" href="">

                        </a></form></div><a class="link" href="">
                </a></div>
        </>
    );
}
export default Login;