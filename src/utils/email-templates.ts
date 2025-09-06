export const generateAdminEmailHTML = (data: any) => `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #f9f9f9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
      
      <!-- Header -->
      <div style="background-color: #EBEBEB; color: #ffffff; text-align: center; padding: 25px 20px;">
        <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
      </div>
      
      <!-- Body -->
      <div style="padding: 25px 20px; color: #333; line-height: 1.6;">
        <p style="font-size: 16px;">You have received a new inquiry with the following details:</p>
        
        <!-- Data Table -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
          ${Object.entries(data)
            .map(
              ([key, value]) =>
                `<tr>
                  <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold; width: 40%;">${key}</td>
                  <td style="padding: 10px; border: 1px solid #e0e0e0;">${value}</td>
                </tr>`
            )
            .join("")}
        </table>

        <!-- Optional footer -->
        <p style="margin-top: 20px; font-size: 12px; color: #777;">
          This is an automated notification from your website inquiry form.
        </p>
      </div>
      
    </div>
  </div>
`;

export const generateUserEmailHTML = (data: any) => `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #f9f9f9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
      
      <!-- Header -->
      <div style="background-color: #EBEBEB; color: #ffffff; text-align: center; padding: 25px 20px;">
        <h1 style="margin: 0; font-size: 24px;">Thank You, ${data.name}!</h1>
      </div>
      
      <!-- Body -->
      <div style="padding: 25px 20px; color: #333; line-height: 1.6;">
        <p style="font-size: 16px;">We have received your inquiry and our team will get back to you shortly. Here’s a summary of your submission:</p>
        
        <!-- Data Table -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
          ${Object.entries(data)
            .map(
              ([key, value]) =>
                `<tr>
                  <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold; width: 40%;">${key}</td>
                  <td style="padding: 10px; border: 1px solid #e0e0e0;">${value}</td>
                </tr>`
            )
            .join("")}
        </table>

        <!-- Optional CTA -->
        <p style="text-align: center; margin-top: 25px;">
          <a href="https://purelaywater.com" target="_blank" rel="noopener noreferrer"
             style="background-color: #1D4ED8; color: #fff; text-decoration: none; padding: 12px 25px; border-radius: 8px; display: inline-block; font-weight: bold;">
            Visit Our Website
          </a>
        </p>

        <p style="margin-top: 20px; font-size: 12px; color: #777;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
      
    </div>
  </div>
`;
