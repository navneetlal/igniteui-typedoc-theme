import { DefaultThemeRenderContext, JSX, PageEvent, Reflection } from 'typedoc';

export function infraFoot(context: DefaultThemeRenderContext, props: PageEvent<Reflection>) {
    return (
        <><footer class="ui-footer ui-footer--clearfix">
            <div class="ui-footer__wrap ui-footer--clearfix ui-footer__icons">
                <a href="/community/blogs/" target="blank”" class="ui-footer__icon-link mchNoDecorate" aria-label="RSS">
                    <svg viewBox="0 0 512 512">
                        <path d="M201.8 347.2c0 20.3-16.5 36.8-36.8 36.8 -20.3 0-36.8-16.5-36.8-36.8s16.5-36.8 36.8-36.8C185.3 310.4 201.8 326.8 201.8 347.2zM128.2 204.7v54.5c68.5 0.7 124 56.3 124.7 124.7h54.5C306.7 285.3 226.9 205.4 128.2 204.7zM128.2 166.6c57.9 0.3 112.3 22.9 153.2 63.9 41 41 63.7 95.5 63.9 153.5h54.5c-0.3-149.9-121.7-271.4-271.6-271.9V166.6L128.2 166.6z"></path>
                    </svg>
                </a>

                <a href="https://twitter.com/infragistics" target="blank" class="ui-footer__icon-link mchNoDecorate" aria-label="Twitter">
                    <svg viewBox="0 0 512 512">
                        <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                    </svg>
                </a>
                <a href="https://www.facebook.com/infragistics" target="blank”" class="ui-footer__icon-link mchNoDecorate" aria-label="Facebook">
                    <svg viewBox="0 0 512 512">
                        <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                    </svg>
                </a>
                <a href="http://www.linkedin.com/company/infragistics" target="blank”" class="ui-footer__icon-link mchNoDecorate" aria-label="LinkedIn">
                    <svg viewBox="0 0 512 512">
                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                    </svg>
                </a>
                <a href="https://www.youtube.com/user/Infragistics?annotation_id=annotation_3135485231&amp;feature=iv&amp;src_vid=c8dSiyWIfEo&amp;sub_confirmation=1" target="blank”" class="ui-footer__icon-link mchNoDecorate" aria-label="YouTube">
                    <svg viewBox="0 0 512 512">
                        <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path>
                    </svg>
                </a>
            </div>
            <div class="ui-footer__wrap ui-footer__wrap--newsletter ui-footer--clearfix">
                <div class="ui-footer__menu-block">
                    <div class="ui-footer__col-one-fourth ui-footer__col-block">
                        <div class="ui-footer__menu">
                            <ul class="ui-footer__menu-list">
                                <li class="ui-footer__menu-list-item">
                                    <div class="ui-footer__category">Products</div>
                                    <ul>
                                        <li><a class="menu__link mchNoDecorate" href="/products/ultimate">Developers</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/products/indigo-design/desktop">UX Pros</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="https://revealbi.io">Business Intelligence</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/products/shareplus-enterprise">Team Productivity</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/how-to-buy/product-pricing">View All</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/free-downloads">Free Trials</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-footer__col-one-fourth ui-footer__col-block">
                        <div class="ui-footer__menu">
                            <ul class="ui-footer__menu-list">
                                <li class="ui-footer__menu-list-item">
                                    <div class="ui-footer__category">Learn &amp; Support</div>
                                    <ul>
                                        <li><a class="menu__link mchNoDecorate" href="/support">Help &amp; API Docs</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/community/blogs">Blogs</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/support/chat">Technical Support Chat</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/community/forums">Forums</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/community/ideas">Product Ideas</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/my-account/submit-support-request">Submit a Request</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-footer__col-one-fourth ui-footer__col-block">
                        <div class="ui-footer__menu">
                            <ul class="ui-footer__menu-list">
                                <li class="ui-footer__menu-list-item">
                                    <div class="ui-footer__category">My Account</div>
                                    <ul>
                                        <li><a class="menu__link mchNoDecorate" href="https://customer.infragistics.com/subscriptions">Manage My Subscriptions</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/my-account/submit-support-request">Support Requests</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-footer__col-one-fourth ui-footer__col-block">
                        <div class="ui-footer__menu">
                            <ul class="ui-footer__menu-list">
                                <li class="ui-footer__menu-list-item">
                                    <div class="ui-footer__category">Corporate</div>
                                    <ul>
                                        <li><a class="menu__link mchNoDecorate" href="/about-us">About Us</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/about-us/careers">Careers</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/legal/terms-of-use">Legal</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/events">News &amp; Events</a></li>
                                        <li><a class="menu__link mchNoDecorate" href="/about-us/alliances-partners">Partners</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ui-footer__newsletter-block">
                    <div class="newsletter__form—alt bg--dark">
                        <div class="ui-footer-newsletter__header">
                            <div style="width: 55px;"><img src="https://static.infragistics.com/marketing/Website/General/open-mail-icon.svg" alt=""></img>
                            </div>
                            <div style="width: 70%;"><span class="text--h5 emphasize">Stay Up-to-Date</span></div>
                        </div>
                        <div>
                            <p class="ui-footer-newsletter__subheadline" style="margin-bottom: 30px;">Get the latest blogs, eBooks, events, and whitepapers.</p>
                            <a class="navigation__cta mchNoDecorate" style="color: #fff; text-decoration: none; font-size: 0.875rem;" href="/newsletter-signup">Sign Me Up!</a></div>
                    </div>
                </div>
            </div>
            <div class="ui-footer__wrap ui-footer--clearfix ui-footer--legal" style="text-align: center;">
                <div class="ui-footer__menu">
                    <ul class="ui-footer__menu-list">
                        <li class="ui-footer__menu-list-item display--inline-block" style="margin: 0 8px; display: inline-block;"><a class="menu__link mchNoDecorate" style="display: inline-block;" href="/legal/privacy">Privacy Policy</a><span style="font-size: 10px; color: rgba(255,255,255,0.4); display: inline-block; margin-left: 4px;">(updated)</span></li>
                        <li class="ui-footer__menu-list-item display--inline-block" style="margin: 0 8px; display: inline-block;"><a class="menu__link mchNoDecorate" href="/legal/cookie-policy">Cookies</a></li>
                        <li class="ui-footer__menu-list-item display--inline-block" style="margin: 0 8px; display: inline-block;"><a class="menu__link mchNoDecorate" style="display: inline-block;" href="/legal/terms-of-use">Terms of Use</a><span style="font-size: 10px; color: rgba(255,255,255,0.4); display: inline-block; margin-left: 4px;">(updated)</span></li>
                    </ul>
                </div>
            </div>
        </footer>
        <footer id="footer">
                <div id="footer-wrap" class="be-wrap clearfix">
                    <div id="copyright">© Copyright 2022 INFRAGISTICS. All Rights Reserved</div>
                </div>
        </footer></>
    )
}