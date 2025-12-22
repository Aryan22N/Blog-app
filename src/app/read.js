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



*/
