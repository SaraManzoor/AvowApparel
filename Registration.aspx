<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Registration.aspx.cs" Inherits="Avowapparel.Registration" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <div class="html not-front not-logged-in no-sidebars page-user page-user-login i18n-en lang-en section-user">
        <h1 id="page-title" class="title">Home</h1>
        <div id="block-system-main" class="block block-system block-even">
             
                       <h1 class="profile__title">Create New Account</h1>
                        <div class="form-item form-type-textfield form-item-name">
                            <label for="userFNameTxt">First Name
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input id="userFNameTxt" runat="server" size="60" />
                        </div>
                        
                        <div class="form-item form-type-textfield form-item-name">
                            <label for="userLNameTxt">Last Name
                              
                            </label>
                            <input id="userLNameTxt" runat="server" size="60" />
                        </div> 
                        
                        <div class="form-item form-type-textfield form-item-name">
                            <label for="userEmailTxt">Email
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input id="userEmailTxt" runat="server" size="60" />
                        </div>
                      
                         <div class="form-item form-type-textfield form-item-name">
                            <label for="userPhoneTxt">Phone No</label>
                            <input id="userPhoneTxt" runat="server" size="60" />
                        </div>
                       
             
                        <div class="form-item form-type-textfield form-item-name">
                            <label for="userAddressTxt">Address</label>
                            <input id="userAddressTxt" runat="server" size="60" />
                        </div>
                        
            
            
                        <div class="form-item form-type-password form-item-pass">
                            <label for="passwordTxt">Password
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input type="password" id="passwordTxt" runat="server" size="60" />
                        </div>

                         <div class="form-item form-type-password form-item-pass">
                            <label for="rePasswordTxt">Confirm password
                                <span class="form-required" title="This field is required.">*</span>
                            </label>
                            <input type="password" id="rePasswordTxt" runat="server" size="60" />
                        </div>

                        
                       
                         <asp:Button CssClass="secondary button radius form-submit" runat="server" ID="registerButton" Text="Create new account" OnClick="registerButton_Click"  />
                        <label id="errorList" style="color:red" runat="server">
                        </label>
                    </div>
            </div>
            
</asp:Content>
