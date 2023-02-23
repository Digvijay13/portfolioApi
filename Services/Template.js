export const htmlTemp = (message) => {
  const data = `<!doctype html>
    <html lang="en">
      <head>
        <style>
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            word-wrap: break-word;
          }
          body{
            margin: 0;
            padding:0;
            overflow-x: hidden;
          }
          li{
            color: #fff;
            list-style: none;
          }
          a{
            display: inline-block;
            text-decoration: none;
          }
          @font-face {
                font-family:'Segoe UI';
                src: url(font/Segoe-UI.ttf);  
            }
            img{
              width: 100%;
            }
            .logo{
                width:100px;
                height:30px;
            }
            
        </style>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-type" content="text/html"; charset="utf-8">
        <title>email templte</title>
      </head>
      <body>
        <!--starting template-->
        <div style="height:100%; max-width: 600px;margin: auto; border:1px dashed orange ;border-radius:8px;"id="bodyTable">
            <img class="logo" src="http://cdn.mcauto-images-production.sendgrid.net/c25065401b6a58c7/5e64495a-737d-40a2-ab0b-fd6ba1e6010b/2051x401.png" / >
            <div>
                <p>I wanted to take a moment to express my gratitude for registering on our website. We are delighted to have you as a member of our community, and we are looking forward to providing you with the best possible experience.</p>
                <p>As a registered user, you will have access to a wide range of features and benefits, including exclusive content, discounts, and special offers. We will also keep you informed of our latest news and updates via email.</p>
                <p>Please do not hesitate to contact us if you have any questions or concerns. We are always here to help.</p>
                <p>Thank you again for choosing to register on our website. We value your trust and look forward to serving you.</p>
                <p>Our team will contact you ASAP</p>
                <p>Gmail : drana5338@gmail.com </p>
                <a href="https://join.skype.com/invite/vSct5P1EN4iS">Click here to chat</>
            </div>
        </div>
      </body>
    </html>`;
  return data;
};
