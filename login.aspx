<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Avowapparel.login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="html not-front not-logged-in no-sidebars page-user page-user-login i18n-en lang-en section-user">
        <h1 id="page-title" class="title">Home</h1>
        <div id="block-system-main" class="block block-system block-even">
             
                        <h1 class="profile__title">Sign In</h1>
                        <div class="form-item form-type-textfield form-item-name">
                            <label for="userNameTxt">Email
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input id="userNameTxt" runat="server" size="60" />
                        </div>
                        <div class="form-item form-type-password form-item-pass">
                            <label for="edit-pass--2">Password
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input type="password" id="passwordTxt" runat="server" size="60" />
                        </div>

                        <a href="Registration.aspx" class="login-password" title="Get a new password">Sign Up</a>
                        
                       
                         <asp:Button CssClass="secondary button radius form-submit" runat="server" ID="loginBtn" Text="Log in" OnClick="loginBtn_Click" />
                        <label id="errorList" style="color:red" runat="server">
                        </label>
                    </div>
            </div>
       <%--  </div>
     <form class="user-info-from-cookie" enctype="multipart/form-data" action="/user/login" method="post" id="user-register-form" accept-charset="UTF-8">
            <div>
                <h1 class="profile__title">Create New Account</h1>
                <div id="edit-account" class="form-wrapper">
                    <input class="username" placeholder="username" type="hidden" name="name" value="email_registration_tgoY8pJr3u">
                    <div class="form-item form-type-textfield form-item-mail">
                        <label for="edit-mail"><span class="secondary label">E-mail address</span> <span class="form-required" title="This field is required.">*</span></label>
                        <input placeholder="email address" type="text" id="edit-mail" name="mail" value="" size="60" maxlength="254" class="form-text required">
                    </div>
                    <div class="form-item form-type-password-confirm form-item-pass">
                        <div class="form-item form-type-password form-item-pass-pass1 password-parent">
                            <div class="password-strength">
                                <div class="password-strength-text" aria-live="assertive"></div>
                                <div class="password-strength-title">Password strength:</div>
                                <div class="password-indicator">
                                    <div class="indicator"></div>
                                </div>
                            </div>
                            <label for="edit-pass-pass1"><span class="secondary label">Password</span> <span class="form-required" title="This field is required.">*</span></label>
                            <input class="password-field form-text required password-processed" placeholder="password" type="password" id="edit-pass-pass1" name="pass[pass1]" size="60" maxlength="128">
                        </div>
                        <div class="form-item form-type-password form-item-pass-pass2 confirm-parent">
                            <div class="password-confirm">Passwords match: <span></span></div>
                            <label for="edit-pass-pass2"><span class="secondary label">Confirm password</span> <span class="form-required" title="This field is required.">*</span></label>
                            <input class="password-confirm form-text required" placeholder="confirm password" type="password" id="edit-pass-pass2" name="pass[pass2]" size="60" maxlength="128">
                        </div>
                        <div class="password-suggestions description" style="display: none;"></div>
                    </div>
                </div>
                <input type="hidden" name="form_build_id" value="form-zWEzH-0T-uQeaHs0Cb2DimqlUOZub2CWiNagLPKqa7k">
                <input type="hidden" name="form_id" value="user_register_form">
                <div class="form-actions form-wrapper" id="edit-actions">
                    <input class="secondary button radius form-submit" type="submit" id="edit-submit" name="op" value="Create new account"></div>
            </div>
        </form>
     <div id="block-mailchimp-lists-website-signup" class="block block-mailchimp-lists block-odd">
            <h2 class="block-title">Join Our Mailing List</h2>
            <div>
                <form class="mailchimp-lists-user-subscribe-form" action="/user/login" method="post" id="mailchimp-lists-user-subscribe-form-website-signup" accept-charset="UTF-8">
                    <div>
                        <div id="mailchimp-newsletter-website_signup" class="mailchimp-newsletter-wrapper">
                            <div id="edit-mailchimp-lists-mailchimp-website-signup-title" class="form-item form-type-item">
                            </div>
                            <div class="form-item form-type-textfield form-item-mailchimp-lists-mailchimp-website-signup-mergevars-EMAIL">
                                <label for="edit-mailchimp-lists-mailchimp-website-signup-mergevars-email"><span class="secondary label">Email Address</span> <span class="form-required" title="This field is required.">*</span></label>
                                <input placeholder="email" type="text" id="edit-mailchimp-lists-mailchimp-website-signup-mergevars-email" name="mailchimp_lists[mailchimp_website_signup][mergevars][EMAIL]" value="" size="25" maxlength="128" class="form-text required">
                            </div>
                            <p class="notice-join">Join our mailing list for information on events, new collections, special offers, and all things Avow!</p>
                        </div>
                        <input type="submit" id="edit-submit--3" name="op" value="Join" class="form-submit"><input type="hidden" name="form_build_id" value="form-JK2Zc2ZIvlwj-u8l41xtyKItd35zxOSRz6dg4rZ0bbM">
                        <input type="hidden" name="form_id" value="mailchimp_lists_user_subscribe_form_website_signup">
                    </div>
                </form>
            </div>
        </div>--%>

</asp:Content>
