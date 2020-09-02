<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-1">
      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item d-flex align-items-center">
            <router-link class="text-dark px-2" to="/">Home</router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link class="text-dark px-2" to="/need-auth">NeedAuth</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
         <li class="nav-item">
           <a class="text-dark px-3" href="javascript:void(0);">Login</a>
         </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
