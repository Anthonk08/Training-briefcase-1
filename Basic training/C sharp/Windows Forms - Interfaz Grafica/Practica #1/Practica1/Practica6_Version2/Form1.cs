using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica6_Version2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnMostrar_Click(object sender, EventArgs e)
        {
            //Mensaje normal
            //MessageBox.Show("Hola a todos!!");

            //Mensaje normal y el titulo de la caja
            //MessageBox.Show("Hola a todos", "Mi MessageBox Anthony");

            //Mensaje normal, el titulo de la caja, botones con una opcion como resultado y iconos
            DialogResult result = MessageBox.Show("Te gusta el refresco?", "Preguntas rapidas", MessageBoxButtons.AbortRetryIgnore, MessageBoxIcon.Question);

            if (result == DialogResult.Abort)
            {
                lblMensaje.Text = "Abortar";
            }
            else if (result == DialogResult.Retry)
            {
                lblMensaje.Text = "Reintentar";
            }
            else {
                lblMensaje.Text = "Ignorar";
            }
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
