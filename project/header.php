<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing page</title>
  <link rel="stylesheet" href="style2.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<!-- <section>
 <div class="bg-black text-white py-5 font-varela fixed w-full p-5">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#" class=" bg- text-xl font-bold uppercase">logo <span class="font-extralight text-white/70">logo</span></a>
      </div>
      <div class="hidden md:block text-center mr-8">
        <ul class="flex items-center gap-4">
          
              <li>
                <a href="#home" class="inline-block text-sm py-2 px-3 uppercase">Home</a>
              </li>
              <li>
                <a href="services" class="inline-block text-sm py-2 px-3 uppercase">Services</a>
              </li>
              <li>
                <a href="signup.php" class="inline-block text-sm py-2 px-3 uppercase">Book</a>
              </li>
              <li>
                <a href="#about" class="inline-block text-sm py-2 px-3 uppercase">About</a>
              </li>
              <li>
                <a href="#contact" class="inline-block text-sm py-2 px-3 uppercase">Contact</a>
              </li>

                <button class="text-xl ps-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29c-2.204-.051-4.251.736-5.816 2.256A7.93 7.93 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306a5.98 5.98 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2"/><path fill="currentColor" d="M7 12h2v8H7zm8 0h2v8h-2z"/></svg>
                </button>

              <a href="signup.php" class="ml-5 hover:text-white text-[#8b5958]">Signup</a>
              <a href="login.php" class="ml-5 hover:text-white text-[#8b5958]">Login</a>

        </ul>
      </div>
      <div class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22"/></svg>
      </div>
    </nav>
    </div>
  </section>   -->


  <section>
  <div class="bg-black text-white py-5 font-varela fixed w-full p-5">
    <nav class="flex justify-between items-center">
      <div>
      <a href="#" className="text-md font-semibold uppercase">New Arrival <span className="font-extralight text-white/70">Gsm World</span></a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:block text-center">
        <ul class="flex items-center gap-4">
          <li><a href="#home" class="inline-block text-sm py-2 px-3 uppercase">Home</a></li>
          <li><a href="#services" class="inline-block text-sm py-2 px-3 uppercase">Services</a></li>
          <li><a href="signup.php" class="inline-block text-sm py-2 px-3 uppercase">Book</a></li>
          <li><a href="#about" class="inline-block text-sm py-2 px-3 uppercase">About</a></li>
          <li><a href="#contact" class="inline-block text-sm py-2 px-3 uppercase">Contact</a></li>
          <a href="signup.php" class="ml-5 hover:text-white text-[#8b5958]">Signup</a>
          <a href="login.php" class="ml-5 hover:text-white text-[#8b5958]">Login</a>
        </ul>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button id="menu-btn" class="text-4xl focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-black text-white mt-5">
      <ul class="flex flex-col gap-4 items-center">
        <li><a href="#home" class="block text-sm py-2 px-3 uppercase">Home</a></li>
        <li><a href="#services" class="block text-sm py-2 px-3 uppercase">Services</a></li>
        <li><a href="signup.php" class="block text-sm py-2 px-3 uppercase">Book</a></li>
        <li><a href="#about" class="block text-sm py-2 px-3 uppercase">About</a></li>
        <li><a href="#contact" class="block text-sm py-2 px-3 uppercase">Contact</a></li>
        <a href="signup.php" class="block hover:text-white text-[#8b5958]">Signup</a>
        <a href="login.php" class="block hover:text-white text-[#8b5958]">Login</a>
      </ul>
    </div>
  </div>
</section>

<script>
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
</script>
