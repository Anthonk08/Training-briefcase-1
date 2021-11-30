
namespace Practica9_Examen
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblNombre = new System.Windows.Forms.Label();
            this.txtNombre = new System.Windows.Forms.TextBox();
            this.lblSeguro = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.rbTotal = new System.Windows.Forms.RadioButton();
            this.rbAterceros = new System.Windows.Forms.RadioButton();
            this.rbBasico = new System.Windows.Forms.RadioButton();
            this.btnClose = new System.Windows.Forms.Button();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.chkAudio = new System.Windows.Forms.CheckBox();
            this.chkAire = new System.Windows.Forms.CheckBox();
            this.lblEquipo = new System.Windows.Forms.Label();
            this.lblCosto = new System.Windows.Forms.Label();
            this.txtCosto = new System.Windows.Forms.TextBox();
            this.btnCotizar = new System.Windows.Forms.Button();
            this.txtCotizacion = new System.Windows.Forms.TextBox();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblNombre
            // 
            this.lblNombre.AutoSize = true;
            this.lblNombre.Location = new System.Drawing.Point(32, 30);
            this.lblNombre.Name = "lblNombre";
            this.lblNombre.Size = new System.Drawing.Size(71, 20);
            this.lblNombre.TabIndex = 0;
            this.lblNombre.Text = "Nombre: ";
            // 
            // txtNombre
            // 
            this.txtNombre.Location = new System.Drawing.Point(120, 30);
            this.txtNombre.Name = "txtNombre";
            this.txtNombre.Size = new System.Drawing.Size(125, 27);
            this.txtNombre.TabIndex = 1;
            // 
            // lblSeguro
            // 
            this.lblSeguro.AutoSize = true;
            this.lblSeguro.Location = new System.Drawing.Point(12, 35);
            this.lblSeguro.Name = "lblSeguro";
            this.lblSeguro.Size = new System.Drawing.Size(59, 20);
            this.lblSeguro.TabIndex = 2;
            this.lblSeguro.Text = "Seguro:";
            this.lblSeguro.Click += new System.EventHandler(this.lblSeguro_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.rbTotal);
            this.groupBox1.Controls.Add(this.rbAterceros);
            this.groupBox1.Controls.Add(this.rbBasico);
            this.groupBox1.Controls.Add(this.lblSeguro);
            this.groupBox1.Location = new System.Drawing.Point(32, 99);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(248, 159);
            this.groupBox1.TabIndex = 3;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Seguros a seleccionar";
            // 
            // rbTotal
            // 
            this.rbTotal.AutoSize = true;
            this.rbTotal.Location = new System.Drawing.Point(98, 117);
            this.rbTotal.Name = "rbTotal";
            this.rbTotal.Size = new System.Drawing.Size(63, 24);
            this.rbTotal.TabIndex = 5;
            this.rbTotal.Text = "Total";
            this.rbTotal.UseVisualStyleBackColor = true;
            // 
            // rbAterceros
            // 
            this.rbAterceros.AutoSize = true;
            this.rbAterceros.Location = new System.Drawing.Point(98, 78);
            this.rbAterceros.Name = "rbAterceros";
            this.rbAterceros.Size = new System.Drawing.Size(99, 24);
            this.rbAterceros.TabIndex = 4;
            this.rbAterceros.Text = "A Terceros";
            this.rbAterceros.UseVisualStyleBackColor = true;
            // 
            // rbBasico
            // 
            this.rbBasico.AutoSize = true;
            this.rbBasico.Checked = true;
            this.rbBasico.Location = new System.Drawing.Point(98, 35);
            this.rbBasico.Name = "rbBasico";
            this.rbBasico.Size = new System.Drawing.Size(73, 24);
            this.rbBasico.TabIndex = 3;
            this.rbBasico.TabStop = true;
            this.rbBasico.Text = "Basico";
            this.rbBasico.UseVisualStyleBackColor = true;
            // 
            // btnClose
            // 
            this.btnClose.Location = new System.Drawing.Point(464, 476);
            this.btnClose.Name = "btnClose";
            this.btnClose.Size = new System.Drawing.Size(94, 29);
            this.btnClose.TabIndex = 4;
            this.btnClose.Text = "Close";
            this.btnClose.UseVisualStyleBackColor = true;
            this.btnClose.Click += new System.EventHandler(this.btnClose_Click);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.chkAudio);
            this.groupBox2.Controls.Add(this.chkAire);
            this.groupBox2.Controls.Add(this.lblEquipo);
            this.groupBox2.Location = new System.Drawing.Point(308, 99);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(250, 159);
            this.groupBox2.TabIndex = 5;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Equipamiento";
            // 
            // chkAudio
            // 
            this.chkAudio.AutoSize = true;
            this.chkAudio.Location = new System.Drawing.Point(45, 98);
            this.chkAudio.Name = "chkAudio";
            this.chkAudio.Size = new System.Drawing.Size(150, 24);
            this.chkAudio.TabIndex = 2;
            this.chkAudio.Text = "Sistema De Audio";
            this.chkAudio.UseVisualStyleBackColor = true;
            // 
            // chkAire
            // 
            this.chkAire.AutoSize = true;
            this.chkAire.Location = new System.Drawing.Point(45, 67);
            this.chkAire.Name = "chkAire";
            this.chkAire.Size = new System.Drawing.Size(163, 24);
            this.chkAire.TabIndex = 1;
            this.chkAire.Text = "Aire Acondicionado";
            this.chkAire.UseVisualStyleBackColor = true;
            // 
            // lblEquipo
            // 
            this.lblEquipo.AutoSize = true;
            this.lblEquipo.Location = new System.Drawing.Point(22, 35);
            this.lblEquipo.Name = "lblEquipo";
            this.lblEquipo.Size = new System.Drawing.Size(59, 20);
            this.lblEquipo.TabIndex = 0;
            this.lblEquipo.Text = "Equipo:";
            // 
            // lblCosto
            // 
            this.lblCosto.AutoSize = true;
            this.lblCosto.Location = new System.Drawing.Point(32, 292);
            this.lblCosto.Name = "lblCosto";
            this.lblCosto.Size = new System.Drawing.Size(50, 20);
            this.lblCosto.TabIndex = 6;
            this.lblCosto.Text = "Costo:";
            // 
            // txtCosto
            // 
            this.txtCosto.Location = new System.Drawing.Point(88, 292);
            this.txtCosto.Name = "txtCosto";
            this.txtCosto.Size = new System.Drawing.Size(125, 27);
            this.txtCosto.TabIndex = 7;
            this.txtCosto.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // btnCotizar
            // 
            this.btnCotizar.Location = new System.Drawing.Point(236, 292);
            this.btnCotizar.Name = "btnCotizar";
            this.btnCotizar.Size = new System.Drawing.Size(94, 29);
            this.btnCotizar.TabIndex = 8;
            this.btnCotizar.Text = "Cotizar";
            this.btnCotizar.UseVisualStyleBackColor = true;
            this.btnCotizar.Click += new System.EventHandler(this.btnCotizar_Click);
            // 
            // txtCotizacion
            // 
            this.txtCotizacion.Location = new System.Drawing.Point(32, 337);
            this.txtCotizacion.Multiline = true;
            this.txtCotizacion.Name = "txtCotizacion";
            this.txtCotizacion.Size = new System.Drawing.Size(526, 120);
            this.txtCotizacion.TabIndex = 9;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(592, 517);
            this.Controls.Add(this.txtCotizacion);
            this.Controls.Add(this.btnCotizar);
            this.Controls.Add(this.txtCosto);
            this.Controls.Add(this.lblCosto);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.btnClose);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.txtNombre);
            this.Controls.Add(this.lblNombre);
            this.Name = "Form1";
            this.Text = "Examen Practico";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblNombre;
        private System.Windows.Forms.TextBox txtNombre;
        private System.Windows.Forms.Label lblSeguro;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton rbTotal;
        private System.Windows.Forms.RadioButton rbAterceros;
        private System.Windows.Forms.RadioButton rbBasico;
        private System.Windows.Forms.Button btnClose;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.CheckBox chkAudio;
        private System.Windows.Forms.CheckBox chkAire;
        private System.Windows.Forms.Label lblEquipo;
        private System.Windows.Forms.Label lblCosto;
        private System.Windows.Forms.TextBox txtCosto;
        private System.Windows.Forms.Button btnCotizar;
        private System.Windows.Forms.TextBox txtCotizacion;
    }
}

