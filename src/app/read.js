/*
This is the blog app

i have changed the daark mode theme colors in globals.css file
and added a color to inherit from parent to child in page.js file

also in layout file i have wrapped children with a div container
and wrapper classnames for styling purpose

in globals.css file
i have adjusted the styling of wrapper and layout-container classes


u can not write
      <h1> {"what's hot"}</h1>

      what's 's gives an error in jsx

u have to write it like this
      <h1> {"what's hot"}</h1>


🔹 What is <aside>?

<aside> is a semantic HTML tag used for:

Content that is related to the main content but not the main focus

🔸 Simple Meaning (Easy words)

🧠 Think of <aside> as:

“Extra information shown beside the main content”

Just like:

      A newspaper’s side column
      YouTube’s recommended videos
      Medium’s “Most Popular” section


Cheat Sheet: The "Short Note" to Remember
If you want to center something perfectly in the middle of a container, copy this mental checklist:

The Holy Trinity of Centering:

flex: "Turn on" the flexbox engine.

justify-center: Center it horizontally (Left/Right).

items-center: Center it vertically (Top/Bottom).

🔹 When should YOU use flex-1?

✅ Side-by-side layouts
✅ Image + text columns
✅ Equal-width cards
✅ Responsive sections

🧠 Easy Memory Trick

flex-1 = “share the space equally”


🔹 What does self-center do?

self-center is a Tailwind class that means:

align-self: center;

In simple words:

It centers ONE item inside a flex container, without affecting others.

By default the react creates the server side components

To make it client side component we have to add "use client" at the top of the file

In Next.js App Router, you can use useState, useEffect, and other React hooks only inside files marked with "use client".

React components MUST start with a capital letter.
Otherwise, React treats them as normal functions, and hooks will not work.
🧠 Memory Trick

If it uses hooks → it must start with a Capital letter

### 🔐 Auth.js Folder Structure – Short Note (For Future Reference)

* **`app/api/auth/[...nextauth]/route.ts`**

  * Catch-all API route for Auth.js
  * Handles **signin, signout, session, callbacks**
  * Required because Auth.js uses `/api/auth/*`

* **`[...nextauth]`**

  * Catch-all dynamic folder
  * One file handles **all auth-related routes**

* **`lib/auth.ts`**

  * Central auth configuration
  * Providers, callbacks, session strategy

* **`(auth)` route group**

  * Groups auth pages like `/login`, `/register`
  * Does **not** affect URL structure

* **`middleware.ts`**

  * Protects private routes
  * Redirects unauthenticated users

📌 **Why this pattern?**

* Clean code
* Scalable
* Industry standard
* Easy OAuth + session handling

👉 **Remember:**
**UI → `(auth)` | Logic → `lib/auth.ts` | API → `[...nextauth]` | Protection → `middleware.ts`**


🔥 Why router.replace() is Better
Method	Result
push()	User can go back to login ❌
replace()	Login page removed from history ✅

### 🔹 `useSession` – Short Summary

`useSession` is a **NextAuth client-side hook** used to check whether a user is **logged in or not** and to access **basic user information** like name, email, and profile image.

It returns:

* **`session`** → user data
* **`status`** → `"loading"`, `"authenticated"`, or `"unauthenticated"`

It is mainly used to:

* Show/hide UI based on login state
* Display user details (Navbar, Profile, Dashboard)
* Protect client-side pages or components

`useSession` should be used **only in client components** and **not for backend security**.
For secure server-side authentication, `getServerSession()` is used instead.


3️⃣ What does MongoDBAdapter give you?

When you write:

adapter: MongoDBAdapter(clientPromise),


You get ALL of this automatically 👇

✅ Automatic database collections

MongoDBAdapter creates these collections for you:

Collection	What it stores
users	User profile (name, email, image)
accounts	OAuth provider info (Google, GitHub)
sessions	Logged-in sessions
verification_tokens	Email login tokens

You do not create these manually.

✅ Automatic user creation

When a user signs in with Google:

NextAuth checks users collection

User exists → login

User not exists → created automatically

No manual insert needed.

✅ Automatic session handling

Stores sessions in MongoDB

Validates sessions on every request

Deletes sessions on logout

✅ Provider linking

If the same email logs in with:

Google

GitHub

👉 Adapter links both accounts to one user

4️⃣ What problem does it solve?
Without MongoDBAdapter ❌

You would need to:

Design user schema

Write insert/update queries

Handle sessions manually

Secure cookies

Manage token expiry

❌ Very complex
❌ Very error-prone

5️⃣ Why we didn’t create schemas

MongoDB is schema-less
NextAuth already defines its own structure

Example user document:

{
  "_id": "ObjectId(...)",
  "name": "Aryan Nandanwar",
  "email": "aryan@gmail.com",
  "image": "https://..."
}


➡️ Adapter controls this structure
➡️ You don’t need Mongoose schemas

8️⃣ Mental model (remember this 🧠)
Google
  ↓
NextAuth (auth logic)
  ↓
MongoDBAdapter (translator)
  ↓
MongoDB (database)

9️⃣ One-line summary

MongoDBAdapter automatically stores users, sessions, and auth data in MongoDB so you don’t have to write any database code.

User clicks Login
        ↓
Google OAuth
        ↓
NextAuth receives user info
        ↓
MongoDBAdapter checks DB
        ↓
User exists? ── Yes → Login
        │
        No
        ↓
Create user in MongoDB
        ↓
Create session
        ↓
Send cookie to browser
        ↓
useSession() gets user data


GPT-Chat---->https://chatgpt.com/s/t_694949f3c1d08191bc92ebd9039947fa


✅ Solution: mongoose.js

📁 src/lib/mongoose.js

What it does:

Connects to MongoDB once

Reuses the connection

Works safely with Next.js

Simple analogy:

mongoose.js is like WiFi connection
You connect once, then use it everywhere.

Small Example:
await connectMongoose(); // ensures DB is connected


You don’t care how it connects — just that it does.

🧩 STEP 2: Why You Created Category Schema
❓ What is a Schema?

A schema defines:

What fields your data has

Which are required

Which are unique

Real-life analogy:

Schema = Form structure

Name: required
Email: unique

🧩 STEP 3: Why You Created /api/categories/route.js
❓ Why API Routes?

Frontend should NOT talk directly to DB.

Instead:

Frontend → API → Database


This gives:

Security

Validation

Reusability

Category GET and POST --->https://chatgpt.com/s/t_69496c62e82c8191b9cce5a32c8dd26d


✅ What Is Working Now

Your final flow is now correct:

Contact form
   ↓
/api/contact (POST)
   ↓
MongoDB: Contact.create()  ✅
Resend: emails.send()      ✅
   ↓
Email arrives in Gmail     ✅


So:

Frontend ✔️

API ✔️

MongoDB ✔️

Resend ✔️

❌ What the Real Issue Was (Root Cause)

The problem was NOT your schema
The problem was NOT MongoDB
The problem was NOT Resend

🔴 The real issue was:

How the Mongoose model was exported under Next.js App Router + Turbopack

🧠 What Went Wrong (in simple terms)

You originally had this pattern:

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);


This pattern:

Works in older Next.js

Works in Webpack

Works sometimes in Turbopack

❌ Breaks unpredictably in App Router + Turbopack

What happened internally:

Turbopack loaded the file

mongoose.models.Contact existed

BUT it was not a fully initialised model

So:

Contact.create === undefined


That’s why you kept seeing:

create is not a function

✅ Why the Final Fix Worked

You switched to this pattern:

let Contact;

if (mongoose.models.Contact) {
  Contact = mongoose.models.Contact;
} else {
  Contact = mongoose.model("Contact", ContactSchema);
}

export default Contact;

This guarantees:

A real Mongoose model

No partial exports

No race conditions

Safe hot reloads

Safe Turbopack execution

👉 This is the correct pattern for Next.js App Router.


More info--->https://chatgpt.com/s/t_694a6fa07ce481919d9d5995c8fb35c4

Great question 👍
I’ll explain this **in simple Hinglish**, step-by-step, without jargon.

---

## 🔹 Ye `ContactEmail` component kya hai?

👉 **Ye normal UI component nahi hai**
👉 **Ye browser me render nahi hota**
👉 **Ye sirf EMAIL ka content banane ke liye use hota hai**

Socho isko as:

> **“Email ka template”**

---

## 📩 Is component ka actual use kya hai?

Jab koi user **contact form submit karta hai**, tab:

```
User form submit karta hai
        ↓
Next.js API (/api/contact)
        ↓
Resend ko email bhejna hota hai
        ↓
Resend ko email ka CONTENT chahiye
```

👉 Wahi content **`ContactEmail` banata hai**

---

## 🧠 Simple example se samjho

Jaise website ke liye:

* `ContactForm.jsx` → page ke liye UI

Waise hi email ke liye:

* `ContactEmail.jsx` → email ke liye UI

---

## 🔁 Flow ke andar ye component kaha use hota hai?

Tum API route me likhte ho:

```js
await resend.emails.send({
  from: "Contact <onboarding@resend.dev>",
  to: ["yourgmail@gmail.com"],
  subject: "New Contact Message",
  react: ContactEmail({ name, email, message }),
});
```

### Yaha kya ho raha hai?

* `ContactEmail(...)` call hua
* Usse **HTML email content** bana
* Resend ne us content ko email me convert karke bhej diya

---

## ❓ Ye browser me kyun nahi dikhta?

Kyuki:

* Ye **server pe run hota hai**
* Ye **email ke liye hota hai**
* Ye **page ya component tree ka part nahi hai**

Isme:

* ❌ `use client`
* ❌ hooks
* ❌ click events

Sirf **static content**

---

## 🧾 Is component ke andar kya hota hai?

```jsx
export default function ContactEmail({ name, email, message }) {
```

👉 Ye 3 cheeze receive karta hai:

* user ka name
* user ka email
* user ka message

---

```jsx
<h2>New Contact Form Message</h2>
```

👉 Email ka heading

---

```jsx
<p><strong>Name:</strong> {name}</p>
```

👉 Tumhe user ka name dikhata hai email me

---

```jsx
<p>{message}</p>
```

👉 User ne jo likha, wahi message

---

```jsx
<p style={{ fontSize: "12px", color: "#666" }}>
  This message was sent from your website contact form.
</p>
```

👉 Extra info (professional touch)

---

## 🆚 Agar ye component na ho to?

Agar tum ye component **use na karo**, to tumhe API me ye likhna padega:

```js
html: `
  <h2>New Contact Message</h2>
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>${message}</p>
`
```

👉 Ye:

* messy hai
* maintain karna mushkil
* UI change karna hard

---

## ✅ `ContactEmail` use karne ke fayde

✔ Clean code
✔ Reusable
✔ Readable
✔ Easy to style
✔ Professional emails

---

## 🧠 Ek line me summary

> **`ContactEmail` ek React-based EMAIL TEMPLATE hai
> jo Resend ko batata hai ki email ka content kaisa hona chahiye.**

---

## 🔑 Yaad rakhne wali baat

* ❌ Ye page component nahi hai
* ❌ Ye UI component nahi hai
* ✅ Ye **email ka layout** hai
* ✅ Server-side use hota hai

---

Great question 👍
I’ll explain **line-by-line in simple Hinglish**, so you *exactly* know what this code is doing.

---

## 🔹 Ye code kis kaam ka hai?

👉 Ye **contact form submit hone ke baad**:

* Data backend ko bhejta hai
* Success / error handle karta hai
* User ko message dikhata hai

Basically:

> **“Form submit → API call → response check → user ko feedback”**

---

## 🧠 Pura flow simple words me

```
User clicks "Send Message"
        ↓
Data API ko bheja jata hai
        ↓
Agar sab sahi → success alert
Agar kuch galat → error alert
```

---

## 🔍 Ab line-by-line samjho

---

### 🔹 `try { ... }`

```js
try {
```

👉 Matlab:

> “Is block ke andar jo bhi likha hai,
> agar usme error aaya to `catch` handle karega”

---

### 🔹 `fetch("/api/contact", {...})`

```js
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

👉 Kya ho raha hai:

* `/api/contact` → tumhara backend API
* `POST` → data bhejna
* `headers` → bata rahe ho “JSON data aa raha hai”
* `body` → user ka form data (name, email, message)

Simple bolun:

> **Form ka data backend ko bhej rahe ho**

---

### 🔹 `if (!res.ok) throw new Error("Failed");`

```js
if (!res.ok) throw new Error("Failed");
```

👉 Ye **important line** hai.

* `res.ok === true` → request successful (200–299)
* `res.ok === false` → kuch galat (400, 500)

Agar response sahi nahi:

> **Zabardasti error throw karo**
> taaki `catch` me chala jaye

---

### 🔹 Success case

```js
alert("Message sent successfully!");
setForm({ name: "", email: "", message: "" });
```

👉 Agar sab sahi raha:

* User ko success alert
* Form reset (inputs clear)

---

### 🔹 `catch (err)`

```js
} catch (err) {
  alert("Something went wrong. Try again.");
}
```

👉 Ye tab chalega jab:

* Network error
* Server error (500)
* `throw new Error()`

User ko batata hai:

> “Kuch galat ho gaya, dobara try karo”

---

### 🔹 `finally`

```js
} finally {
  setLoading(false);
}
```

👉 Ye **hamesha chalega**:

* Success ho ya fail
* Error aaye ya na aaye

Iska kaam:

* Loading state band karna
* Button ko wapas normal banana

---

## 🔄 Visual example

```js
setLoading(true);   // button disable, "Sending..."

try {
  // API call
  // success → alert + reset
} catch {
  // error → alert
} finally {
  setLoading(false); // button enable
}
```

---

## 🧠 Ek line me summary

> **Ye code form ka data backend ko bhejta hai,
> success ya error handle karta hai,
> aur user ko proper feedback deta hai.**

---

## 🔑 Yaad rakhne wali baat

* `try` → risky code
* `catch` → error handle
* `finally` → cleanup (loading off)
* `res.ok` → server response check

---

//form ka default behaviour get hota hai and vo url mai show hota hai vo bad practice hai vo na ho is liye hum e.preventDefault() likhte hai pr agar vo work na kare to POST is fallback vo chalega hi
🧠 Ek line me yaad rakho

method="post" ek safety net hai
Aaj ka code safe, kal ka bhi safe

🔹 Ye block overall kya karta hai?
await resend.emails.send({ ... });


👉 Ye code email bhejne ka kaam karta hai
👉 Jab user contact form submit karta hai, tab tumhe email aata hai

Simple words me:

“Resend ko bol rahe ho: ek email bhejo”

🧠 Step-by-step samjho
🔹 await resend.emails.send({ ... })
await resend.emails.send({


resend → Resend service ka object

emails.send() → email bhejne ka function

await → jab tak email send ka response na aa jaye, wait karo

👉 Matlab:

“Email bhejo aur confirm hone ka wait karo”

🔹 from
from: "Contact <onboarding@resend.dev>",


👉 Ye sender email hai
👉 Matlab:

“Ye email kis taraf se aa rahi hai”

Contact → sender ka naam (email me dikhega)

onboarding@resend.dev → Resend ka default/sandbox email

📩 Inbox me aise dikhega:

Contact <onboarding@resend.dev>


⚠️ Production me:

from: "Contact <contact@yourdomain.com>"

🔹 to
to: ["aryaanjsnfjzn@gmail.com"],


👉 Ye receiver email hai
👉 Matlab:

“Email kis ko bhejni hai”

Tumhara Gmail

Isme multiple emails bhi ho sakte hain:

to: ["a@gmail.com", "b@gmail.com"]

🔹 subject
subject: "New Contact Message",


👉 Ye email ka subject line hai
👉 Inbox me bold me dikhega

Example:

Subject: New Contact Message

🔹 react
react: ContactEmail({ name, email, message }),


👉 Ye email ka CONTENT hai
👉 Yahi sabse important line hai

Yaha kya ho raha hai?

ContactEmail → email ka template (React component)

{ name, email, message } → user ka data

Ye function call hota hai

Usse HTML email content banta hai

👉 Matlab:

“Is template ko use karke email ka body bana do”

🔁 Pura flow ek saath
User form submit karta hai
        ↓
API route chalta hai
        ↓
ContactEmail(name, email, message) se email content banta hai
        ↓
Resend us content ko email me convert karta hai
        ↓
Tumhe Gmail me email milta hai


❓ Ye line kya hai?
export const runtime = "nodejs";


👉 Iska matlab:

“Is API route ko Node.js environment me run karo”

🧠 Problem kya hoti agar ye na likho?

Next.js App Router me by default:

API routes Edge Runtime me run ho sakti hain

Edge Runtime ≠ Node.js

Edge Runtime ki limitations:

❌ Node.js libraries ka full support nahi

❌ mongoose ka proper support nahi

❌ resend, nodemailer, crypto, etc. fail ho jaate hain

🔴 Tumhare case me Edge Runtime kyun problem tha?

Tum use kar rahe ho:

1️⃣ MongoDB (Mongoose)
import mongoose from "mongoose";


👉 Mongoose sirf Node.js me sahi kaam karta hai
Edge runtime me:

connection issues

random crashes

weird errors (create is not a function jaisi)

2️⃣ Resend (Email sending)
import { Resend } from "resend";


👉 Resend internally:

Node APIs use karta hai

Edge me restricted hota hai

✅ Isliye ye line likhna zaruri ho gaya
export const runtime = "nodejs";


Isse Next.js ko clear instruction milta hai:

❝ Is route ko Edge me mat chalao
Isko proper Node.js server pe chalao ❞

🔁 Simple comparison (easy to remember)
Runtime	Kya hota hai
Edge	Fast, lightweight, limited
Node.js	Full power, heavy libs allowed

Tumhara use case:

Database ✅

Email sending ✅

👉 Node.js runtime REQUIRED

🧠 Real-life analogy

Socho:

Edge runtime = Bike

Node.js runtime = Truck

Bike:

Fast

Lightweight

Chhote kaam ke liye

Truck:

Heavy load

Database

Email

Production kaam

Tum database + email bhej rahe ho → Truck chahiye 🚚

❓ Kya har API route me ye likhna chahiye?

❌ Nahi

Sirf tab likho jab:

MongoDB / Mongoose

Resend / Nodemailer

fs, crypto

Heavy server-side logic

Edge runtime use karo jab:

Simple auth check

Small JSON response

Ultra-fast APIs

✅ Tumhare project ke liye final rule

Jaha database ya email ho → runtime = "nodejs"

🧠 Ek line me summary

Ye line ensure karti hai ki tumhara API route
Node.js environment me chale, jaha MongoDB aur Resend properly kaam karein.

Gpt Chat-->https://chatgpt.com/s/t_694a8ebe906481918b2a0e62fc3d940d


*/
