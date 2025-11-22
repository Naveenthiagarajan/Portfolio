# Formspree Setup Instructions

To enable the contact form on your portfolio, follow these steps:

## 1. Sign up for Formspree
- Go to [https://formspree.io](https://formspree.io)
- Sign up for a free account (no credit card required)
- Free tier includes 50 submissions per month

## 2. Create a New Form
- After signing in, click "New Form"
- Give it a name (e.g., "Portfolio Contact Form")
- Copy your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

## 3. Add to Environment Variables
- Create a `.env` file in the root of your project
- Add the following line:
  ```
  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
  ```
- Replace `YOUR_FORM_ID` with your actual form ID from Formspree

## 4. Restart Your Dev Server
- Stop your current dev server (Ctrl+C)
- Run `npm run dev` again to load the new environment variable

## 5. Test the Form
- Fill out and submit the contact form
- Check your email inbox for the submission
- You can also view submissions in your Formspree dashboard

That's it! Your contact form will now send emails directly to your inbox.





