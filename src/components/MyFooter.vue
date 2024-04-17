<template>
    <div class="footer--wrapper">
    <div class="footer--info">
        <div class="footer--article">
            <p>Is there a project?</p>
            <h1>Let&rsquo;s work together</h1>
        </div>
        <div class="footer--contacts">
            <div>
                <p>For all questions</p>
                <p>
                    +7 (920) 278—00—68 <br>
                    qtim@agency.com
                </p>
            </div>
            <div>
                <p>Office in Russia</p>
                <p>139 Ruben Station Lake Drew, NM 52678</p>
                <img src="@/assets/svg/button.svg" alt="Send">
            </div>
            <div>
                <p>Office in Dubai</p>
                <p>139 Ruben Station Lake Drew, NM 52678</p>
                <img src="@/assets/svg/button.svg" alt="Send">
            </div>
        </div>
    </div>
    <div class="footer--nav">
        <div>
            <nav>
                <a to="https://www.facebook.com/">Facebook</a>
                <a to="https://www.instagram.com/">Instagram</a>
                <a to="https://web.telegram.org/">Telegram</a>
            </nav>
        </div>
        <div class="blob--wrapper"><img src="@/assets/svg/blob.svg" alt="GO" /> <span style="position: absolute; color: rgba(255, 255, 255, 1); bottom: 25px; font-size: 32px;">Go</span></div>
        <div>
            <nav>
                <a to="https://www.behance.net/">Behance</a>
                <a to="https://ru.linkedin.com/">Linkedn</a>
                <a to="/">Privacy Policy</a>
            </nav>
        </div>
    </div>
</div>
</template>


<style>
.footer--wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: stretch;
    max-width: 1216px;
    margin: 0 auto;
}

.footer--info{
    flex: 0 0 70%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 140px;
}

.footer--contacts{
    width: 152px;
    flex: 0 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.footer--contacts div{
    width: 152px;
    margin-bottom: 36px;
}

.footer--contacts p{
    margin: 12px 0;
}

.footer--contacts div:last-of-type{
    margin-bottom: 0;
}

.footer--article{
    width: 464px;
    align-self: baseline;
}

.footer--article p{
    margin: 0;
}

.footer--article h1{
    font-size: 112px;
    margin: 56px 0;
    text-decoration: 1px underline;
    text-decoration-skip-ink: all;
    text-underline-offset: 0.5rem;
}

.footer--nav{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    
}

.footer--nav nav{
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    text-decoration: 1px underline;
    text-decoration-skip-ink: all;
    text-underline-offset: 0.3rem;
    margin-bottom: 30px;
}

.blob--wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
</style>