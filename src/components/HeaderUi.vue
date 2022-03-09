<template>
  <Header class="header wrapper">
    <div class="header-logo">
      <svg
        width="53"
        height="20"
        viewBox="0 0 53 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.3748 7.823V16.9956C19.4681 17.8168 20.2482 19.4591 22.6221 19.4591H26.0374V17.6115H22.6221C22.1369 17.6115 21.1664 17.3428 21.1664 16.2678V7.823H25.1974V5.80742H21.1664V2.43859H19.3748V5.80742H16.9111V7.823H19.3748Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.3377 7.823V16.9956C46.431 17.8168 47.2112 19.4591 49.5851 19.4591H53.0004V17.6115H49.5851C49.0998 17.6115 48.1294 17.3428 48.1294 16.2678V7.823H52.1603V5.80742H48.1294V2.43859H46.3377V5.80742H43.874V7.823H46.3377Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H2.28312L7.5579 9.21119L12.9364 0H15.2733L8.58137 11.4943H6.29825L0 0ZM8.5826 11.4943H6.30332V19.4591H8.5826V11.4943Z"
          fill="#38BFF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9629 0H29.246L34.5208 9.21119L39.8993 0H42.2362L35.5443 11.4943H33.2611L26.9629 0ZM35.5455 11.4943H33.2662V19.4591H35.5455V11.4943Z"
          fill="#F15525"
        />
      </svg>
    </div>

    <div class="header-nav">
      <ul class="list-menu">
        <li class="list-item">
          <a href="#">Чему вы научитесь</a>
        </li>
        <li class="list-item">
          <a href="#">Процесс обучения</a>
        </li>

        <li class="list-item">
          <a href="#">Стоимость</a>
        </li>

        <li class="list-item">
          <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
    <div class="header-auth">
      <div class="header-register"><a href="#" class="button-clear">Регистрация</a></div>
      <div class="header-login"><a href="#" class="button-login">Войти</a></div>
    </div>
  </Header>
</template>

<style lang="scss">
.header { 
  padding: 18px 0;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;

  background-color: #fff;
  border-radius:20px;
  
}
.list-menu {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 1.3%;
white-space: nowrap;

 
}
.header-logo {
  margin-left: 20px;
  
}
.header-auth {

  margin-right: 20px;
  display: flex;
}
.header-register {
  margin-right: 20px;
}
.list-item {
  margin-left: 30px;
}
</style>
