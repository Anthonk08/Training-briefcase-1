
namespace Control_App
{
    partial class ControlMaster
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
            this.panel1 = new System.Windows.Forms.Panel();
            this.btnResultado = new System.Windows.Forms.Button();
            this.panel3 = new System.Windows.Forms.Panel();
            this.lblResultado = new System.Windows.Forms.Label();
            this.panel2 = new System.Windows.Forms.Panel();
            this.lblLogueados = new System.Windows.Forms.Label();
            this.btnEmpate = new System.Windows.Forms.Button();
            this.btnRandom = new System.Windows.Forms.Button();
            this.btnRechazada = new System.Windows.Forms.Button();
            this.btbAprobada = new System.Windows.Forms.Button();
            this.panel1.SuspendLayout();
            this.panel3.SuspendLayout();
            this.panel2.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.AccessibleRole = System.Windows.Forms.AccessibleRole.None;
            this.panel1.AutoScroll = true;
            this.panel1.AutoSize = true;
            this.panel1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel1.Controls.Add(this.btnResultado);
            this.panel1.Controls.Add(this.panel3);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.btnEmpate);
            this.panel1.Controls.Add(this.btnRandom);
            this.panel1.Controls.Add(this.btnRechazada);
            this.panel1.Controls.Add(this.btbAprobada);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(418, 392);
            this.panel1.TabIndex = 0;
            // 
            // btnResultado
            // 
            this.btnResultado.BackColor = System.Drawing.Color.DarkOrange;
            this.btnResultado.Location = new System.Drawing.Point(159, 255);
            this.btnResultado.Name = "btnResultado";
            this.btnResultado.Size = new System.Drawing.Size(93, 37);
            this.btnResultado.TabIndex = 6;
            this.btnResultado.Text = "Obtener";
            this.btnResultado.UseVisualStyleBackColor = false;
            this.btnResultado.Click += new System.EventHandler(this.btnResultado_Click);
            // 
            // panel3
            // 
            this.panel3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel3.Controls.Add(this.lblResultado);
            this.panel3.Location = new System.Drawing.Point(61, 298);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(285, 70);
            this.panel3.TabIndex = 5;
            // 
            // lblResultado
            // 
            this.lblResultado.Font = new System.Drawing.Font("Segoe UI", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblResultado.Location = new System.Drawing.Point(-2, 9);
            this.lblResultado.Name = "lblResultado";
            this.lblResultado.Size = new System.Drawing.Size(285, 50);
            this.lblResultado.TabIndex = 0;
            this.lblResultado.Text = "N/A";
            this.lblResultado.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // panel2
            // 
            this.panel2.AutoSize = true;
            this.panel2.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel2.Controls.Add(this.lblLogueados);
            this.panel2.Location = new System.Drawing.Point(61, 10);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(292, 108);
            this.panel2.TabIndex = 4;
            // 
            // lblLogueados
            // 
            this.lblLogueados.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.lblLogueados.AutoSize = true;
            this.lblLogueados.Font = new System.Drawing.Font("Segoe UI", 36F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblLogueados.Location = new System.Drawing.Point(84, 14);
            this.lblLogueados.Name = "lblLogueados";
            this.lblLogueados.Size = new System.Drawing.Size(0, 65);
            this.lblLogueados.TabIndex = 0;
            // 
            // btnEmpate
            // 
            this.btnEmpate.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.btnEmpate.Location = new System.Drawing.Point(307, 196);
            this.btnEmpate.Name = "btnEmpate";
            this.btnEmpate.Size = new System.Drawing.Size(93, 37);
            this.btnEmpate.TabIndex = 3;
            this.btnEmpate.Text = "Empate";
            this.btnEmpate.UseVisualStyleBackColor = false;
            this.btnEmpate.Click += new System.EventHandler(this.btnEmpate_Click);
            // 
            // btnRandom
            // 
            this.btnRandom.BackColor = System.Drawing.Color.LightCoral;
            this.btnRandom.Location = new System.Drawing.Point(208, 196);
            this.btnRandom.Name = "btnRandom";
            this.btnRandom.Size = new System.Drawing.Size(93, 37);
            this.btnRandom.TabIndex = 2;
            this.btnRandom.Text = "Random";
            this.btnRandom.UseVisualStyleBackColor = false;
            this.btnRandom.Click += new System.EventHandler(this.btnRandom_Click);
            // 
            // btnRechazada
            // 
            this.btnRechazada.BackColor = System.Drawing.Color.Red;
            this.btnRechazada.Location = new System.Drawing.Point(109, 196);
            this.btnRechazada.Name = "btnRechazada";
            this.btnRechazada.Size = new System.Drawing.Size(93, 37);
            this.btnRechazada.TabIndex = 1;
            this.btnRechazada.Text = "Rechazada";
            this.btnRechazada.UseVisualStyleBackColor = false;
            this.btnRechazada.Click += new System.EventHandler(this.btnRechazada_Click);
            // 
            // btbAprobada
            // 
            this.btbAprobada.BackColor = System.Drawing.Color.LimeGreen;
            this.btbAprobada.ForeColor = System.Drawing.SystemColors.ControlText;
            this.btbAprobada.Location = new System.Drawing.Point(10, 196);
            this.btbAprobada.Name = "btbAprobada";
            this.btbAprobada.Size = new System.Drawing.Size(93, 37);
            this.btbAprobada.TabIndex = 0;
            this.btbAprobada.Text = "Aprobada";
            this.btbAprobada.UseVisualStyleBackColor = false;
            this.btbAprobada.Click += new System.EventHandler(this.btnAprobada_Click);
            // 
            // ControlMaster
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(418, 392);
            this.Controls.Add(this.panel1);
            this.MaximizeBox = false;
            this.MaximumSize = new System.Drawing.Size(434, 431);
            this.MinimumSize = new System.Drawing.Size(434, 431);
            this.Name = "ControlMaster";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Control Master De Senadores";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.ControlMaster_FormClosing);
            this.Load += new System.EventHandler(this.ControlMaster_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel3.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button btnEmpate;
        private System.Windows.Forms.Button btnRandom;
        private System.Windows.Forms.Button btnRechazada;
        private System.Windows.Forms.Button btbAprobada;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label lblLogueados;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Label lblResultado;
        private System.Windows.Forms.Button btnResultado;
    }
}

