<%@ Page Title="" Language="C#" MasterPageFile="~/admin.Master" AutoEventWireup="true" CodeBehind="Products.aspx.cs" Inherits="Avowapparel.Products" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:GridView ID="gvTest" runat="server"
        AutoGenerateColumns="FALSE" ShowFooter="false"
        OnRowCommand="gvTest_RowCommand"
        OnRowDeleting="gvTest_RowDeleting">
        <AlternatingRowStyle BackColor="#BFE4FF" />
        <Columns>

            <asp:BoundField DataField="ProductID" HeaderText="ProductID" />
            <asp:BoundField DataField="Name" HeaderText="Name" />
            <asp:BoundField DataField="Description" HeaderText="Description" />
            <asp:BoundField DataField="Color" HeaderText="Color" />
            <asp:BoundField DataField="Size" HeaderText="Size" />
            <asp:BoundField DataField="OtherFeatures" HeaderText="Other Features" />
            <asp:BoundField DataField="Price" HeaderText="Price" />
            <asp:BoundField DataField="Discount" HeaderText="Discount" />
           
            <asp:TemplateField>
                <ItemTemplate>
                    <a href="UpdateProduct.aspx?id=<%# Eval("ProductID") %>" style="color: #ff6a00" id="btnViewmore">Edit</a>
                    <asp:Label ID="lblID" runat="server" style="display:none;" Text='<%# Eval("ProductID") %>'></asp:Label>
                </ItemTemplate>
            </asp:TemplateField>

            <asp:CommandField ButtonType="Link" DeleteText="Delete" ControlStyle-ForeColor="#ff6a00" ShowDeleteButton="true" />
     
         </Columns>
    </asp:GridView>
</asp:Content>
