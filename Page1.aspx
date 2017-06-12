<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Page1.aspx.cs" Inherits="Avowapparel.Page1"  EnableEventValidation="false" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <script src="Scripts/lightbox/jquery-1.11.0.min.js"></script>
    <script src="Scripts/lightbox/lightbox.min.js"></script>
    <link href="Scripts/lightbox/lightbox.css" rel="stylesheet" />

    <h1 id="page-title" class="title" > <span id="PageTitle" runat="server">Tops &amp; Layering</span></h1>
    <div id="block-system-main" class="block block-system block-even">
        <div>
            <div class="view view-products-by-category view-id-products_by_category view-display-id-page_1 view-dom-id-08813ea57931909578170fae092be2ee">
                <div class="view-content">
                    <div class="item-list">
                        <ul>
                            <asp:Repeater ID="RepDetails" runat="server">
                                <ItemTemplate>

                                    <li class="views-row views-row-1 views-row-odd views-row-first">

                                        <div class="field field-name-field-images field-type-image field-label-hidden">
                                            <div class="field-items">
                                                <div class="field-item even">
                                                    <a class="example-image-link" href="Upload/<%#Eval("ImageName") %>" data-lightbox="example-<%#Eval("ProductID") %>">
                                                        <img class="example-image" src="Upload/<%#Eval("ImageName") %>" alt="image-1" width="198" height="480">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="views-field views-field-title"> 
                                            <strong class="field-content">
                                                <a href="Upload/<%#Eval("ImageName") %>" data-lightbox="example-1-<%#Eval("ProductID") %>"><%#Eval("Name") %></a>

                                            </strong> 

                                        </div>
                                        <strong>
                                            <div class="field field-name-field-color field-type-taxonomy-term-reference field-label-hidden clearfix">
                                                <ul class="links">
                                                    <li class="taxonomy-term-reference-0"><%#Eval("Description") %></li>
                                                </ul>
                                            </div>
                                        </strong>

                                        <div class="field field-name-commerce-price field-type-commerce-price field-label-hidden">
                                            <div class="field-items">
                                                <div class="field-item even">
                                                    <div class="commerce-price-savings-formatter-price">
                                                        <span class="price-amount ">$<%#Eval("Price") %></span>
                                                        <asp:Button CssClass="form-submit" ID="addToCartID" runat="server" CommandArgument='<%#Eval("ProductID") %>'  Text="Add To Cart" OnClick="addToCartID_Click" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ItemTemplate>

                            </asp:Repeater>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
    <div id="block-mailchimp-lists-website-signup" class="block block-mailchimp-lists block-odd">
        <h2 class="block-title">Join Our Mailing List</h2>
        <div>
            <form class="mailchimp-lists-user-subscribe-form" action="/shop-the-collection/tops-and-layering" method="post" id="mailchimp-lists-user-subscribe-form-website-signup" accept-charset="UTF-8">
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
                    <input type="submit" id="edit-submit" name="op" value="Join" class="form-submit"><input type="hidden" name="form_build_id" value="form-6Z65sEQl6n1QkY867KpNaQxO82FBzD3kD_14FCJdsGc">
                    <input type="hidden" name="form_id" value="mailchimp_lists_user_subscribe_form_website_signup">
                </div>
            </form>
        </div>
    </div>

 
</asp:Content>
