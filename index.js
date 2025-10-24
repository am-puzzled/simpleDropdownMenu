
//  re-create elements
 //desktop
    const menuBox = document.getElementById('menuBox');
    const chevronButton = document.getElementById('buttonSchulungen');
    const chevronBox = document.getElementById('chevronBox'); 
    const Nav_menu_item_A = document.getElementById('Nav_menu_item_A');
 //mobile
    const buttonHamburger = document.getElementById('buttonHamburger');
    const mobile_navigationOptions = document.getElementById('mobile_navigationOptions');
    const mobile_buttonSchulungen = document.getElementById('mobile_buttonSchulungen');
    const mobile_buttonProduct = document.getElementById('mobile_buttonProduct');
    const chevronBox_mobile = document.getElementById('chevronBox_mobile');
    const menuStatus = document.getElementById('menuStatus');
   

    // control navigation options on small screens
    buttonHamburger.addEventListener('click', () => {
        mobile_navigationOptions.classList.toggle('active');

        //make sure menubox doesn't remain open
            //  if someone accidentally clicks the hamburger button
                if(menuBox.classList.contains('menuBoxActive')){
                    menuBox.classList.toggle('menuBoxActive');
                }

        //update-aria on click
             //compare to get a true boolean(true===true/ false===true)
                const expanded = buttonHamburger.getAttribute('aria-expanded') === 'true';
                
                if(expanded){
                    //menu is open -> close it
                      buttonHamburger.setAttribute('aria-expanded','false');
                    // buttonHamburger.setAttribute('aria-label', 'close Main menu');
                      menuStatus.textContent = 'navigation options  closed, button collapsed';
                    //Return focus to button
                      //DELAY FOCUS (Give the polite announcement time to be spoken)
                        setTimeout(() => {
                            buttonHamburger.focus();
                        }, 2000);
                }
                else{
                    //menu is closed -> open it
                      buttonHamburger.setAttribute('aria-expanded','true');
                    // buttonHamburger.setAttribute('aria-label', 'open main menu');
                      menuStatus.textContent = 'navigation options opened, button expanded';
                     //give focus to the nav options
                       //DELAY FOCUS (Give the polite announcement time to be spoken)
                        setTimeout(() => {
                            mobile_buttonProduct.focus();
                        }, 2000);
                }


    });


    // contol Menu on big screens
    chevronButton.addEventListener('click', (e) => {
        // toggle menu  
            menuBox.classList.toggle('menuBoxActive');
        // prevent reload bcoz it's a link
            e.preventDefault();
        //toggle chevron
            chevronBox.classList.toggle('active');

        //update-aria on click
             //compare to get a true boolean(true===true/ false===true)
                const expanded = chevronButton.getAttribute('aria-expanded') === 'true';
                
                if(expanded){
                    //menu is open -> close it
                      chevronButton.setAttribute('aria-expanded','false');
                    // buttonHamburger.setAttribute('aria-label', 'close Main menu');
                      menuStatus.textContent = 'menu closed, button collapsed';
                    //Return focus to button
                    setTimeout(() => {
                         chevronButton.focus();
                    }, 1500);
                        
                }
                else{
                    //menu is closed -> open it
                      chevronButton.setAttribute('aria-expanded','true');
                    // buttonHamburger.setAttribute('aria-label', 'open main menu');
                      menuStatus.textContent = 'menu opened, button expanded';
                     //give focus to the menitem 1 options
                       //DELAY FOCUS (Give the polite announcement time to be spoken)
                        setTimeout(() => {
                             Nav_menu_item_A.focus();
                        }, 1500);
                     
                }

            
    });


    // contol Menu on small screens
    mobile_buttonSchulungen.addEventListener('click', (e) => {
        // toggle menu  
            menuBox.classList.toggle('menuBoxActive');
        // prevent reload bcoz it's a link
            e.preventDefault();
        //toggle chevron
            chevronBox_mobile.classList.toggle('active');

        //update aria
        const expanded = mobile_buttonSchulungen.getAttribute('aria-expanded')=== 'true';

            if(expanded){

                mobile_buttonSchulungen.setAttribute('aria-expanded','false');
                menuStatus.textContent = 'schulungen opened';
                //Return focus to button
                  //DELAY FOCUS (Give the polite announcement time to be spoken)
                    setTimeout(() => {
                        mobile_buttonSchulungen.focus();
                    }, 1500);
            }
            else{
                mobile_buttonSchulungen.setAttribute('aria-expanded','true');
                menuStatus.textContent = 'schulungen collapsed';
                //Return focus to button
                    setTimeout(() => {
                        Nav_menu_item_A.focus();
                    }, 1500);
            }

    });



    //prevent reload from inactive links
    document.querySelectorAll('a[href=""]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });


    // keyboard control trap 
    document.addEventListener('keydown' ,(e)=>{

        if( e.key ==='Escape'){
            //mobiles
                //update aria
                buttonHamburger.setAttribute('aria-expanded','false');
                mobile_navigationOptions.classList.toggle('active');
                menuStatus.textContent= 'navigation options closed';

                //Return focus to button
                buttonHamburger.focus();

            //desktops
                //update aria
                chevronButton.setAttribute('aria-expanded','false');
                menuBox.classList.toggle('menuBoxActive');
                menuStatus.textContent= 'navigation options closed';

                //Return focus to button
                chevronButton.focus();
        }
    });
