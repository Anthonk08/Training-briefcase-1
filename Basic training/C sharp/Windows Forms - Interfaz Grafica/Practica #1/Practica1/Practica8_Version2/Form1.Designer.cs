
namespace Practica8_Version2
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
            this.txtMensaje = new System.Windows.Forms.TextBox();
            this.btnEnvio1 = new System.Windows.Forms.Button();
            this.btnCerrar = new System.Windows.Forms.Button();
            this.btnEnvio2 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // txtMensaje
            // 
            this.txtMensaje.Location = new System.Drawing.Point(52, 55);
            this.txtMensaje.Name = "txtMensaje";
            this.txtMensaje.Size = new System.Drawing.Size(125, 27);
            this.txtMensaje.TabIndex = 0;
            // 
            // btnEnvio1
            // 
            this.btnEnvio1.Location = new System.Drawing.Point(226, 55);
            this.btnEnvio1.Name = "btnEnvio1";
            this.btnEnvio1.Size = new System.Drawing.Size(94, 29);
            this.btnEnvio1.TabIndex = 1;
            this.btnEnvio1.Text = "Envio 1";
            this.btnEnvio1.UseVisualStyleBackColor = true;
            this.btnEnvio1.Click += new System.EventHandler(this.btnEnvio1_Click);
            // 
            // btnCerrar
            // 
            this.btnCerrar.Location = new System.Drawing.Point(226, 154);
            this.btnCerrar.Name = "btnCerrar";
            this.btnCerrar.Size = new System.Drawing.Size(94, 29);
            this.btnCerrar.TabIndex = 2;
            this.btnCerrar.Text = "Cerrar";
            this.btnCerrar.UseVisualStyleBackColor = true;
            this.btnCerrar.Click += new System.EventHandler(this.btnCerrar_Click);
            // 
            // btnEnvio2
            // 
            this.btnEnvio2.Location = new System.Drawing.Point(226, 106);
            this.btnEnvio2.Name = "btnEnvio2";
            this.btnEnvio2.Size = new System.Drawing.Size(94, 29);
            this.btnEnvio2.TabIndex = 3;
            this.btnEnvio2.Text = "Envio 2";
            this.btnEnvio2.UseVisualStyleBackColor = true;
            this.btnEnvio2.Click += new System.EventHandler(this.btnEnvio2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(386, 214);
            this.Controls.Add(this.btnEnvio2);
            this.Controls.Add(this.btnCerrar);
            this.Controls.Add(this.btnEnvio1);
            this.Controls.Add(this.txtMensaje);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtMensaje;
        private System.Windows.Forms.Button btnEnvio1;
        private System.Windows.Forms.Button btnCerrar;
        private System.Windows.Forms.Button btnEnvio2;
    }
}

