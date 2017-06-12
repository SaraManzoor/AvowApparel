<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="cart.aspx.cs" Inherits="Avowapparel.cart" EnableEventValidation="false" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 id="page-title" class="title">Shopping Basket</h1>
    <div id="block-system-main" class="block block-system block-even">
        <div>
          
            <%if(RepDetails.Items.Count>0) { %>

            <asp:Repeater runat="server" ID="RepDetails">
                <ItemTemplate>
                    <div style="width: 50000px; margin: 0 auto;">
                    <table class="views-table cols-5" style="width:800px;" >
                        <thead>
                            <tr>
                                <th></th>
                                <th class="views-field views-field-commerce-unit-price">Price </th>
                                <th class="views-field views-field-edit-quantity">Quantity </th>
                                <th class="views-field views-field-edit-delete">Remove </th>
                                <th class="views-field views-field-commerce-total">Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd views-row-first">
                                <td>
                                    <figure class="field field-name-field-images field-type-image field-label-hidden">
                                        <img src="Upload\<%#Eval("Product.ImageName") %> " width="41" height="100" alt="">
                                    </figure>
                                    <a href="Page1.aspx?cat=<%#Eval("Product.CategoryID") %>">
                                        <div class="field field-name-title-field field-type-text field-label-hidden">
                                            <div class="field-items">
                                                <div class="field-item even"><%#Eval("Product.Name") %> </div>
                                            </div>
                                        </div>
                                    </a><span><%#Eval("Product.Color") %></span><span><%#Eval("Product.Size") %></span>
                                </td>
                                <td class="views-field views-field-commerce-unit-price price">$<%#Eval("Product.Price") %></td>
                                <td class="views-field views-field-edit-quantity">
                                    <div class="form-item form-type-textfield form-item-edit-quantity-0">
                                        <asp:TextBox ID="txtQuantity" runat="server"  Text='<%# Eval("Quantity") %>' Width="40" ></asp:TextBox>
                                        
                                    </div>
                                </td>
                                <td class="views-field views-field-edit-delete">
                                    <asp:Button runat="server" class="delete-line-item form-submit" CommandArgument='<%# Eval("Id") %>'  ID="remvoeITem" Text="Remove" OnClick="remvoeITem_Click" />
                                </td>
                                <td class="views-field views-field-commerce-total price">$<%# int.Parse(Eval("Quantity").ToString()) * int.Parse(Eval("Product.Price").ToString()) %> </td>
                               
                            </tr>
                          
                        </tbody>

                    </table>
                        </div>
                </ItemTemplate>
            </asp:Repeater>
            <div class="form-actions commerce-line-item-actions form-wrapper" id="edit-actions">
                <a href="Page1.aspx?cat=1" class="cancel">&lt;&lt; continue shopping</a>
                <asp:Button ID="updateCartBtn" runat="server" Text="Update Cart" CssClass="form-submit" OnClick="updateCartBtn_Click"  />
                <asp:Button ID="checkoutBtn" runat="server" Text="Checkout" CssClass="form-submit" OnClick="checkoutBtn_Click" />

            </div>
            <%} else {%>
              <div class="cart-empty-page">Your shopping basket is empty.</div>
            <%} %>
        </div>
    </div>
    
    

</asp:Content>
