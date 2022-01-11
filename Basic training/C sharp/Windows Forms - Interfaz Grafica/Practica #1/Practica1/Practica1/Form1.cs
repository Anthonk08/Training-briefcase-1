using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnSaludo_Click(object sender, EventArgs e)
        {
            lblMensaje.Text = "Hola Mundo!!";
            this.Text = "Hola a todos!!";
        }

        private void btnDespedida_Click(object sender, EventArgs e)
        {
            lblMensaje.Text = "Nos vemos, chicos!!";
            this.Text = "Bye!";
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            lblMensaje.Text = "";
        }
    }
}
