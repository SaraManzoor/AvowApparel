<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="checkout.aspx.cs" Inherits="Avowapparel.checkout" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div class="html not-front not-logged-in no-sidebars page-user page-user-login i18n-en lang-en section-user">
        <h1 id="page-title" class="title">Home</h1>
        <div id="block-system-main" class="block block-system block-even">

            <h1 class="profile__title">Payment & Shipping </h1>
            <div class="form-item form-type-textfield form-item-name">
                <label for="userFNameTxt">
                    First Name
                                <span class="form-required" title="This field is required.">*</span>
                </label>
                <input id="userFNameTxt" runat="server" size="60" />
            </div>

            <div class="form-item form-type-textfield form-item-name">
                <label for="userLNameTxt">
                    Last Name
                              
                </label>
                <input id="userLNameTxt" runat="server" size="60" />
            </div>

            <label for="userEmailTxt">
                Email
                                <span class="form-required" title="This field is required.">*</span>
            </label>
            <input id="userEmailTxt" runat="server" size="60" />

            <label for="userPhoneTxt">Phone No</label>
            <input id="userPhoneTxt" runat="server" size="60" />

            <label for="userAddressTxt">Address</label>
            <input id="userAddressTxt" runat="server" size="60" />

            <label for="creditCardNoTxt">
                Credit Card No
                                <span class="form-required" title="This field is required.">*</span>
            </label>
            <input type="text" id="creditCardNoTxt" runat="server" size="60" />

            <label for="securityCodeTxt">
                Security Code
                                <span class="form-required" title="This field is required.">*</span>
            </label>
            <input type="text" id="securityCodeTxt" runat="server" size="6" />

            <label for="rePasswordTxt">
                Expiration Date
                                <span class="form-required" title="This field is required.">*</span>
            </label>
               <asp:DropDownList ID="monthDropDownList" runat="server" DataTextField="Value" DataValueField="Text">
                            <asp:ListItem Text="01" Value="1"></asp:ListItem>
                            <asp:ListItem Text="02" Value="2"></asp:ListItem>
                            <asp:ListItem Text="03" Value="3"></asp:ListItem>
                            <asp:ListItem Text="04" Value="4"></asp:ListItem>
                            <asp:ListItem Text="05" Value="5"></asp:ListItem>
                            <asp:ListItem Text="06" Value="6"></asp:ListItem>
                            <asp:ListItem Text="07" Value="7"></asp:ListItem>
                            <asp:ListItem Text="08" Value="8"></asp:ListItem>
                            <asp:ListItem Text="09" Value="9"></asp:ListItem>
                            <asp:ListItem Text="10" Value="10"></asp:ListItem>
                            <asp:ListItem Text="11" Value="11"></asp:ListItem>
                            <asp:ListItem Text="12" Value="12"></asp:ListItem>
            </asp:DropDownList>
               <asp:DropDownList ID="yearDropDownList" runat="server" DataTextField="Value" DataValueField="Text">
                            <asp:ListItem Text="2016" Value="2016"></asp:ListItem>
                            <asp:ListItem Text="2017" Value="2017"></asp:ListItem>
                            <asp:ListItem Text="2018" Value="2018"></asp:ListItem>
                            <asp:ListItem Text="2019" Value="2019"></asp:ListItem>
                            <asp:ListItem Text="2020" Value="2020"></asp:ListItem>
                            <asp:ListItem Text="2021" Value="2021"></asp:ListItem>
                            <asp:ListItem Text="2022" Value="2022"></asp:ListItem>
                            <asp:ListItem Text="2023" Value="2023"></asp:ListItem>
            </asp:DropDownList>
            
            <br />
            <br />


            <asp:Button CssClass="secondary button radius form-submit" runat="server" ID="payButton" Text="Pay" OnClick="payButton_Click" />
            <label id="errorList" style="color: red" runat="server">
            </label>
        </div>
    </div>
</asp:Content>
