
namespace Practica10_Version2
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
            this.lblMensaje = new System.Windows.Forms.Label();
            this.btnForma2 = new System.Windows.Forms.Button();
            this.btnClose = new System.Windows.Forms.Button();
            this.lblContenido = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // lblMensaje
            // 
            this.lblMensaje.AutoSize = true;
            this.lblMensaje.Font = new System.Drawing.Font("Segoe UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblMensaje.Location = new System.Drawing.Point(38, 24);
            this.lblMensaje.Name = "lblMensaje";
            this.lblMensaje.Size = new System.Drawing.Size(142, 31);
            this.lblMensaje.TabIndex = 0;
            this.lblMensaje.Text = "========";
            // 
            // btnForma2
            // 
            this.btnForma2.Location = new System.Drawing.Point(262, 24);
            this.btnForma2.Name = "btnForma2";
            this.btnForma2.Size = new System.Drawing.Size(141, 38);
            this.btnForma2.TabIndex = 1;
            this.btnForma2.Text = "Abrir forma 2";
            this.btnForma2.UseVisualStyleBackColor = true;
            this.btnForma2.Click += new System.EventHandler(this.btnForma2_Click);
            // 
            // btnClose
            // 
            this.btnClose.Location = new System.Drawing.Point(262, 100);
            this.btnClose.Name = "btnClose";
            this.btnClose.Size = new System.Drawing.Size(94, 29);
            this.btnClose.TabIndex = 2;
            this.btnClose.Text = "Close";
            this.btnClose.UseVisualStyleBackColor = true;
            this.btnClose.Click += new System.EventHandler(this.btnClose_Click);
            // 
            // lblContenido
            // 
            this.lblContenido.AutoSize = true;
            this.lblContenido.Location = new System.Drawing.Point(38, 79);
            this.lblContenido.Name = "lblContenido";
            this.lblContenido.Size = new System.Drawing.Size(50, 20);
            this.lblContenido.TabIndex = 3;
            this.lblContenido.Text = "label1";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(434, 152);
            this.Controls.Add(this.lblContenido);
            this.Controls.Add(this.btnClose);
            this.Controls.Add(this.btnForma2);
            this.Controls.Add(this.lblMensaje);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblMensaje;
        private System.Windows.Forms.Button btnForma2;
        private System.Windows.Forms.Button btnClose;
        private System.Windows.Forms.Label lblContenido;
    }
}

