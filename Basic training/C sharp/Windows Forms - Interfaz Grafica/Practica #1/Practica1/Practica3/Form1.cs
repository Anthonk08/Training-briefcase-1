using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSuma_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNumero1.Text);
            double num2 = Convert.ToDouble(txtNumero2.Text);
            double suma = num1 + num2;
            lblResultado.Text = "El resultado de la suma es: "+ suma.ToString();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            lblResultado.Text = "";
            txtNumero1.Text = "0";
            txtNumero2.Text = "0";
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnResta_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNumero1.Text);
            double num2 = Convert.ToDouble(txtNumero2.Text);
            double resta = 0;
            if (num1 <= num2)
            {
                resta = num2 - num1;
            }
            else {
                resta = num1 - num2;
            }

            lblResultado.Text = "El resultado de la resta es: " + resta.ToString(); 
        }

        private void btnMultiplicar_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNumero1.Text);
            double num2 = Convert.ToDouble(txtNumero2.Text);
            double mult = num1 * num2;
            lblResultado.Text = "El resultado de la multiplicacion es: "+mult.ToString();
        }

        private void btnDividir_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNumero1.Text);
            double num2 = Convert.ToDouble(txtNumero2.Text);
            double div = 0;
            if (num1 <= num2)
            {
                div = num2 / num1;
            }
            else {
                div = num1 / num2;
            }

            lblResultado.Text = "El resultado de la division es: " + div.ToString();
        }
    }
}
